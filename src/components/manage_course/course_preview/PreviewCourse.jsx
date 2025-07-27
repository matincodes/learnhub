import PreviewAccordion from "./preview_course_content/PreviewAccordion"

function PreviewCourse() {
  return (
    <div className="h-[630px] w-full overflow-auto bg-white">
      <div className="flex flex-col items-center gap-[32.19px] px-4 py-5">
        <h1 className="text-center text-[32px] font-[600] text-[#002214]">
          Front-end Development Master course on Javascript: The Complete Guide
          for Developers
        </h1>
        <img src="/assets/coursesImages/previewImage.svg" alt="preview image" />
        <div className="h-full w-full">
          <h1 className="text-center text-[27px] font-[600] text-[#002214]">
            Description of Course
          </h1>
          <p className="text-center text-[19.12px] font-[400] text-[#303031]">
            This comprehensive course is designed to transform aspiring
            developers into proficient front-end experts, equipping them with
            the skills to build dynamic, responsive, and interactive web
            applications. By mastering JavaScript, HTML5, and CSS3, students
            will gain a deep understanding of the technologies driving modern
            web development.
          </p>
          <p className="mt-9 flex h-[32.1885986328125] w-full cursor-pointer items-center justify-center gap-[7.85px] text-center text-[15.7px] font-[400] text-[#006038] underline">
            <span> Read more</span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9389 6.36328L9.46001 10.8422C8.93106 11.3712 8.0655 11.3712 7.53654 10.8422L3.05762 6.36328"
                stroke="#006038"
                strokeWidth="1.17763"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </div>
      </div>
      <PreviewAccordion />
    </div>
  )
}

export default PreviewCourse
