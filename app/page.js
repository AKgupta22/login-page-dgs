import CommonInputFieldWIthLabel from "@/components/CommonInputFieldWIthLabel";
import { FaRegEye } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#F6F7F8] flex min-h-screen flex-col gap-8 md:flex-row md:gap-0">
      <div className="h-screen bg-[url('/images/bg_image.png')] bg-no-repeat bg-full relative w-full md:w-1/2">
        <div className="h-full absolute w-3/12 right-0 top-0 bg-gradient-hidden" />
      </div>
      <div className="flex flex-col justify-center items-center relative w-full md:w-1/2">
        <div className="w-1/2">
          <div className="mb-10">
            <img src="/images/datagain.png" alt="logo" />
          </div>
          <form className="flex flex-col gap-8">
            <p className="text-xl font-semibold leading-6 text-[#2C4E6C]">
              Login
            </p>
            <div className="flex flex-col gap-4">
              <CommonInputFieldWIthLabel
                label={"E-mail Address"}
                placeholder={"Enter Your E-mail Address"}
              />
              <CommonInputFieldWIthLabel
                label={"Password"}
                placeholder={"Enter Password"}
                referLink={true}
                referLinkConfig={{ url: "/", title: "Forgot Password" }}
                endEndorsement={true}
                endEndorsementIcon={<FaRegEye height={"20px"} width={"20px"} />}
              />
            </div>
            <button className="text-[white] font-semibold text-sm leading-[18px] px-5 py-3 rounded-[5px] outline-none bg-[#3fc3ac]">
              Submit
            </button>
          </form>
        </div>
        <div className="absolute top-[8%] xs:top-[3%] right-[6%]">
          <img src="images/appeals_tax.png" alt="tax_logo" />
        </div>
      </div>
    </main>
  );
}
