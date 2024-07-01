import Image from "next/image";
import Link from "next/link";

import FaxIcon from "/public/icons/fax.svg";
import PhoneIcon from "/public/icons/phone.svg";
import MailIcon from "/public/icons/mail.svg";
import HouseIcon from "/public/icons/house.svg";

const FooterSection = () => {
  return (
    <footer
      className="text-center text-surface/75 dark:bg-secondary dark:text-secondary-foreground lg:text-left"
    >
      <div className="flex flex-col lg:flex-row gap-x-0 gap-y-8 md:gap-y-16 lg:gap-20 py-10 justify-between text-center lg:text-left">
        <div className="w-full lg:max-w-md">
          <h6
            className="mb-4 flex items-center justify-center gap-4 font-semibold uppercase lg:justify-start"
          >
            <Link
              href="#"
              className="text-lg font-semibold md:text-base"
            >
              <Image
                src="/skillspark-logo-transparent.png"
                alt="Skillspark Logo"
                className="max-w-12 min-w-12"
                width={300}
                height={300}
              />
              <span className="sr-only">Skillspark</span>
            </Link>
            SkillSpark
          </h6>
          <p>
            Skillspark is a platform where you can learn and explore new
            skills. We provide a variety of courses to help you grow and
            develop your skills.
          </p>
        </div>
        <div className="grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase lg:justify-start"
            >
              Courses
            </h6>
            <p className="mb-4">
              <a href="#!">Playing Piano</a>
            </p>
            <p className="mb-4">
              <a href="#!">Sketching</a>
            </p>
            <p className="mb-4">
              <a href="#!">Python</a>
            </p>
            <p>
              <a href="#!">Magic</a>
            </p>
          </div>
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase lg:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!">Pricing</a>
            </p>
            <p className="mb-4">
              <a href="#!">Courses</a>
            </p>
            <p className="mb-4">
              <a href="#!">Orders</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </div>
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase lg:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center lg:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <HouseIcon />
              </span>
              ABCD, XYZ 120024, PQ
            </p>
            <p className="mb-4 flex items-center justify-center lg:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <MailIcon />
              </span>
              abcd@example.com
            </p>
            <p className="mb-4 flex items-center justify-center lg:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <PhoneIcon />
              </span>
              + 01 234 567 81
            </p>
            <p className="flex items-center justify-center lg:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <FaxIcon />
              </span>
              + 01 234 567 89
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2 pb-12 md:pb-4 text-center">
        <p className="text-base font-medium">
          &copy; {new Date().getFullYear()} Skillspark. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
