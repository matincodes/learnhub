import { Button } from '@/components/ui/button'


const Content = () => {
  return (
    <>
      <div className="relative mt-12 flex h-[80vh] lg:h-[60vh] flex-col bg-[#F9FBFA] lg:flex-row">
        <div className="lg:basis-[50%]">
          <img
            src="/assets/mockups/mockup_left.svg"
            alt=""
            className="hidden w-[600px] lg:flex"
          />
          <img
            src="/assets/mockups/courses_mini_1.svg"
            alt=""
            className="flex  lg:hidden"
          />
        </div>

        <div className="relative flex top-[-40px] w-full flex-col items-center justify-center space-y-4 text-center lg:relative lg:h-auto lg:basis-[50%]">
          <p className="font-san text-[35px] font-semibold leading-10 text-[#303031] lg:font-medium z-20">
            The course content you <br /> need, ready for you
          </p>
          <Button className="z-[2] px-[25px] w-fit rounded-xl bg-normal_green font-san text-white hover:bg-[#FAFFFD] hover:text-normal_green">
            Get Started
          </Button>
          
          <img
            src="/assets/mockups/courses_mini_2.svg"
            alt=""
            className="absolute -bottom-[260px] right-0 flex lg:hidden"
          />
          <img
            src="/assets/mockups/mockup_right.svg"
            alt=""
            className="absolute -bottom-[60px] hidden basis-[50%] lg:flex"
          />
        </div>
      </div>

      {/* Gradient */}
      <div className="relative z-10 bg-gradient-to-tr from-[#fff] lg:h-[11vh]"></div>
      {/* Gradient */}
    </>
  )
}

export default Content
