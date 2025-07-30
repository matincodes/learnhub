import { Input } from '@/components/ui/input'
import { useAdmin } from '@/context/admin-context'
import AttachmentBlock from './attachmentBlock'

const LectureItem = ({ item, index, sectionId }) => {
  const { dispatchCourseAction } = useAdmin()

  return (
    <div className="w-full border-b border-[#3333331a] pb-5">
      <h3 className="text-base font-medium text-black">
        Lecture ({index + 1})
      </h3>

      <div className="mt-4 flex flex-col gap-8 rounded-[10px] border border-dashed border-[#3333331a] p-4 w-fit">
        <div className="w-[456px]">
          <label className="text-base font-normal text-black">
            Lecture title
          </label>
          <Input
            className="mt-2 h-[43px] rounded-lg border border-[#3333331a]"
            value={item.item_title}
            onChange={e =>
              dispatchCourseAction({
                type: 'UPDATE_ITEM_IN_SECTION',
                payload: {
                  sectionId,
                  item: { ...item, item_title: e.target.value },
                },
              })
            }
            placeholder="Enter lecture title"
          />
        </div>

        <div className="w-[456px]">
          <label className="text-base font-normal text-black">Attachment</label>
          <AttachmentBlock
            item={item}
            sectionId={sectionId}
          />
        </div>
      </div>
    </div>
  )
}

export default LectureItem
