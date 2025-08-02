import { Accordion } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useAdmin } from '@/context/admin-context'
import SectionItem from './sectionItem'

function LecturerForm() {
  const { courseState, dispatchCourseAction } = useAdmin()

  return (
    <div className="flex w-full max-w-[1114px] flex-col gap-[37px]">
      <Card className="w-full rounded-[10px] bg-white p-5">
        <CardContent className="space-y-10 p-0">
          <Accordion type="single" collapsible defaultValue="section-1">
            {courseState.course_sections.map((section, idx) => (
              <SectionItem
                key={section.section_id}
                section={section}
                index={idx}
              />
            ))}
          </Accordion>

          <Button
            variant="outline"
            onClick={() =>
              dispatchCourseAction({
                type: 'ADD_SECTION',
                payload: {
                  id: `section-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`,
                },
              })
            }
          >
            <img
              className="mr-2 h-[18px] w-[18px]"
              src="/assets/adminIcons/add-01.svg"
              alt="Add section"
            />
            Add new section
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default LecturerForm
