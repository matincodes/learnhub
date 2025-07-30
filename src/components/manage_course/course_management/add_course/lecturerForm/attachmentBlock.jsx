import { useAdmin } from "@/context/admin-context"
import { useRef } from "react"

const attachmentOptions = [
  {
    type: 'video',
    icon: '/assets/adminIcons/fi-br-play-alt.svg',
  },
  {
    type: 'pdf',
    icon: '/assets/adminIcons/Group.svg',
  },
]

const FilePreview = ({ type, url }) => {
  const commonClass =
    'h-[50px] w-[50px] rounded-full border border-[#3333331a] bg-white'

  if (type === 'video') {
    return (
      <video className={commonClass} controls>
        <source src={url} type="video/mp4" />
      </video>
    )
  }

  return (
    <a
      className={commonClass}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="h-6 w-6"
        alt="Uploaded file"
        src="/assets/adminIcons/file-uploaded.svg"
      />
    </a>
  )
}

const UploadOption = ({
  itemId,
  option,
  index,
  sectionId,
}) => {
  const { dispatchCourseAction } = useAdmin()
  const fileInputRefs = useRef({})

  const handleUploadClick = attachmentId => e => {
    e.stopPropagation()
    fileInputRefs.current[attachmentId]?.click()
  }

  const handleAddAttachment = (item_id, item_type, sectionId) => e => {
    if (e.target.files && e.target.files.length > 0) {
      dispatchCourseAction({
        type: 'UPDATE_ITEM_IN_SECTION',
        payload: {
          sectionId,
          item: {
            item_id,
            item_type,
            item_file: e.target.files[0],
          },
        },
      })
    }
  }
  const inputId = `${itemId}-${index}`

  return (
    <div
      key={inputId}
      className="flex flex-col items-center justify-center gap-3"
      onClick={handleUploadClick(inputId)}
    >
      <input
        type="file"
        ref={el => (fileInputRefs.current[inputId] = el)}
        onChange={handleAddAttachment(itemId, option.type, sectionId)}
        className="hidden"
        accept={option.type === 'video' ? 'video/*' : 'application/pdf'}
      />
      <div className="group relative flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full border border-[#3333331a] bg-white hover:border-[#F7AE30] hover:bg-[#FBEBD0]">
        <img
          className="h-6 w-6 group-hover:bg-[#FBEBD0]"
          alt={`${option.type} icon`}
          src={option.icon}
        />
      </div>
      <span className="font-['Work_Sans',Helvetica] text-[13px] font-medium leading-6 text-[#aaaaaa]">
        {option.type}
      </span>
    </div>
  )
}

const AttachmentBlock = ({ item, sectionId }) => {
  return (
    <div className="flex w-full items-center justify-center gap-16 rounded-lg border border-[#3333331a] bg-white p-4">
      {item.item_file && (
        <div className="flex items-center gap-2">
          <FilePreview type={item.item_type} url={item.item_url} />
        </div>
      )}

      {!item.item_file &&
        attachmentOptions.map((option, index) => (
          <UploadOption
            key={index}
            itemId={item.item_id}
            option={option}
            index={index}
            sectionId={sectionId}
          />
        ))}
    </div>
  )
}

export default AttachmentBlock
