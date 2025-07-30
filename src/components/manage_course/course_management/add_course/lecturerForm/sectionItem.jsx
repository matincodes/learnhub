import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAdmin } from '@/context/admin-context'
import LectureItem from './lectureItem'

const SectionItem = ({ section, index }) => {
  const { dispatchCourseAction } = useAdmin()

  return (
    <AccordionItem
      value={section.section_id}
      className="mt-10 rounded-[10px] border-2 border-[#f7f7f7]"
    >
      <AccordionTrigger className="px-5 py-5 hover:no-underline">
        <h2 className="text-2xl font-semibold text-[#303031]">
          Section {index + 1}
        </h2>
      </AccordionTrigger>
      <AccordionContent className="px-5 pt-0">
        <div className="mb-6 w-[456px]">
          <label className="text-base font-normal text-black">
            Section title
          </label>
          <Input
            className="mt-2 h-[43px] rounded-lg border border-[#3333331a]"
            value={section.section_title}
            onChange={e =>
              dispatchCourseAction({
                type: 'UPDATE_SECTION_TITLE',
                payload: { id: section.section_id, title: e.target.value },
              })
            }
            placeholder="Enter section title"
          />
        </div>

        <div className="space-y-8 rounded-lg bg-[#f7f7f7] p-5">
          {section.section_items.map((item, idx) => (
            <LectureItem
              key={item.item_id}
              item={item}
              index={idx}
              sectionId={section.section_id}
            />
          ))}

          <Button
            variant="outline"
            onClick={() =>
              dispatchCourseAction({
                type: 'ADD_ITEM_TO_SECTION',
                payload: {
                  sectionId: section.section_id,
                  item: {
                    item_id: `item-${Date.now()}-${Math.random().toString(36).slice(2)}`,
                    item_type: '',
                    item_title: '',
                    item_url: '',
                    item_file: null,
                  },
                },
              })
            }
          >
            <img
              className="mr-2 h-[18px] w-[18px]"
              src="/assets/adminIcons/add-01.svg"
              alt="Add"
            />
            Add new lecture
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

export default SectionItem
