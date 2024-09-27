import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from 'react-icons/lu'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

const Footer = () => (
  <div className="relative flex flex-col bg-dark_green p-5">
    <div className="flex items-center justify-between p-4">
      <img
        src="/assets/learnhub-logo-footer.svg"
        alt=""
        className="w-[170px] lg:w-[230px]"
      />
      <div className="icon flex h-full items-end gap-4">
        <Link to={``}>
          {' '}
          <LuTwitter className="text-[25px] text-white lg:text-[30px]" />{' '}
        </Link>
        <Link to={``}>
          {' '}
          <LuFacebook className="text-[25px] text-white lg:text-[30px]" />{' '}
        </Link>
        <Link to={``}>
          {' '}
          <LuInstagram className="text-[25px] text-white lg:text-[30px]" />{' '}
        </Link>
        <Link to={``}>
          {' '}
          <LuLinkedin className="text-[25px] text-white lg:text-[30px]" />{' '}
        </Link>
      </div>
    </div>

    <div className="grid h-full divide-y divide-[#5A5A5A] border-b border-t border-[#5A5A5A] lg:grid-cols-2 lg:divide-x">
      <div className="flex flex-col gap-4 pb-10 pr-4 pt-5">
        <p className="text-[12px] text-[#D9D9D9]">
          Welcome to learnhub , where we are dedicated to revolutionizing
          education through innovative technology solutions. Our passion lies in
          empowering individuals and institutions to thrive in today's rapidly
          evolving digital landscape.
        </p>
        <p className="text-[12px] text-[#D9D9D9]">
          Our purpose is to create technology that empowers individuals and
          businesses Our user-centric approach ensures that our products are
          intuitive and easy to use. Whether you're a student, educator, or
          lifelong learner, our solutions are designed to seamlessly integrate
          into your educational journey, making learning more accessible,
          engaging, and enjoyable.
        </p>
      </div>

      <div className="flex gap-7 p-4">
        <div className="basis-[50%] space-y-4 lg:basis-[30%]">
          <h1 className="font-manule text-white">Popular Programs</h1>
          <ul className="grid gap-1 text-[#848484]">
            <li className="text-[13px]">
              <Link to={''}>CyberSecurity</Link>
            </li>
            <li className="text-[13px]">
              <Link to={''}>Full Stack Engineering</Link>
            </li>
            <li className="text-[13px]">
              <Link to={''}>UX Design</Link>
            </li>
            <li className="text-[13px]">
              <Link to={''}>Data Analytics</Link>
            </li>
          </ul>
        </div>

        <div className="grid space-y-14 lg:grid-cols-2 lg:space-y-0">
          <div className="space-y-4">
            <h1 className="font-manule text-white">Information</h1>
            <ul className="grid gap-1 text-[#848484]">
              <li className="text-[13px]">
                <Link to={''}>Investors</Link>
              </li>
              <li className="text-[13px]">
                <Link to={''}>Support</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className="font-manule text-white">Newletter</h1>
            <p className="text-[13px] text-[#848484]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <Button className="h-fit w-fit rounded-full bg-white font-san font-semibold text-[#2265AD]">
              {' '}
              <Link to={''}>Subscribe</Link>{' '}
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col-reverse justify-between gap-5 pb-6 pt-6 font-san text-white lg:flex-row lg:gap-0">
      <p className="text-[14px]">
        @2023 LearnHubbyCoderina all rights Reserved
      </p>
      <ul className="flex gap-3">
        <li className="text-[13px]">
          <Link to={''}>Cookie</Link>
        </li>
        <li className="text-[13px]">
          <Link to={''}>Privacy</Link>
        </li>
        <li className="text-[13px]">
          <Link to={''}>Terms Of Use</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
