import { Nunito_Sans } from "@next/font/google";
import Link from "next/link";

const nunito_sans = Nunito_Sans({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <nav className="flex bg-[#f5f5f5] px-6 md:px-12 lg:px-16 py-5 items-center">
        <div className="dropdown mr-5 sm:hidden">
          <label tabIndex={0} className="mt-3 text-4xl">
            ☰
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="grow">
          <div className="text-3xl text-[#10A19D] font-bold">Easy-Pay</div>
        </div>

        <div className="hidden sm:flex gap-3">
          <div>
            <Link href="/login" className="rounded-xl py-2 px-8 w-[110px] font-bold border-2 border-[#10A19D] text-[#10A19D] bg-white">
              Login
            </Link>
          </div>
          <div>
            <Link href="/register" className="rounded-xl py-2 px-6  w-[110px] font-bold border-2 border-[#10A19D] text-white bg-[#10A19D]">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="flex px-6 md:px-12 lg:px-16 gap-20 items-center justify-center gap-20 bg-[#f5f5f5] pb-8">
          <div className="hidden lg:block">
            <img src="/Group 49.svg" />
          </div>

          <div className="flex flex-col gap-5">
            <div className="text-4xl lg:text-6xl font-bold w-full lg:w-[500px] leading-relaxed">
              Awesome App For Saving <span className="text-[#10A19D]">Time.</span>
            </div>

            <div>
              <div className="w-full lg:w-[400px] mb-7">We bring you a mobile app for banking problems that oftenly wasting much of your times.</div>
              <div>
                <button className="rounded-xl py-3 w-[150px] border-2 border-[#10A19D] text-white bg-[#10A19D]">Try It Free</button>
              </div>
            </div>

            <div>
              <div className="mb-5">Available On</div>
              <div className="flex gap-5">
                <div>
                  <img src="/gplay.svg" />
                </div>

                <div>
                  <img src="/appstore.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex bg-[#E5E5E5] px-6 md:px-12 lg:px-16 py-14 overflow-x-auto">
          <div className="lg:grow min-w-[150px]">
            <img src="/microsoft.svg" />
          </div>
          <div className="lg:grow min-w-[150px]">
            <img src="/dropbox.svg" />
          </div>
          <div className="lg:grow min-w-[150px]">
            <img src="/h&m.svg" />
          </div>
          <div className="lg:grow min-w-[150px]">
            <img src="/airbnb.svg" />
          </div>
          <div className="lg:grow min-w-[150px]">
            <img src="/canon.svg" />
          </div>
          <div className="lg:grow min-w-[150px]">
            <img src="/dell.svg" />
          </div>
        </section>

        <section className="bg-[#f5f5f5] px-6 md:px-12 lg:px-16 py-20">
          <div className="text-center mb-10">
            <div className="text-4xl lg:text-6xl font-bold mb-10">
              <span className="text-[#10A19D]">About</span> the Application.
            </div>
            <p>
              We have some great features from the application and it’s totally <br /> free to use by all users around the world.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <div className="card max-[350px]:w-60 w-80 border-white border-2">
              <div className="pt-5 px-10 pb-10 flex flex-col items-center text-center">
                <div>
                  <img src="/phoneIcon.svg" />
                </div>
                <div className="font-bold mb-5 text-xl">24/7 Support</div>
                <div>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</div>
              </div>
            </div>
            <div className="card max-[350px]:w-60 w-80 border-white border-2 bg-white">
              <div className="pt-5 px-10 pb-10 flex flex-col items-center text-center">
                <div>
                  <img src="/lockIcon.svg" />
                </div>
                <div className="font-bold mb-5 text-xl">Data Privacy</div>
                <div>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</div>
              </div>
            </div>
            <div className="card max-[350px]:w-60 w-80 border-white border-2">
              <div className="pt-5 px-10 pb-10 flex flex-col items-center text-center">
                <div>
                  <img src="/downloadIcon.svg" />
                </div>
                <div className="font-bold mb-5 text-xl">Easy Download</div>
                <div>Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex px-6 md:px-12 lg:px-16 py-10 gap-20 items-center justify-center bg-[#E5E5E5]">
          <div className="hidden lg:block">
            <img src="/Group 54.svg" />
          </div>

          <div className="flex flex-col gap-5">
            <div className="text-4xl lg:text-6xl font-bold w-full md:w-[500px] leading-relaxed">
              All The <span className="text-[#10A19D]">Great</span> <br />
              Easy-Pay Features.
            </div>

            <div className="card w-100 bg-white">
              <div className="p-5 flex flex-col">
                <div className="font-bold">
                  <span className="text-[#10A19D]">1.</span> Small Fee
                </div>
                <div>We only charge 5% of every success transaction done in FazzPay app.</div>
              </div>
            </div>

            <div className="card w-100 bg-white">
              <div className="p-5 flex flex-col">
                <div className="font-bold">
                  <span className="text-[#10A19D]">2.</span> Data Secured
                </div>
                <div>All your data is secured properly in our system and it’s encrypted.</div>
              </div>
            </div>

            <div className="card w-100 bg-white">
              <div className="p-5 flex flex-col">
                <div className="font-bold">
                  <span className="text-[#10A19D]">3.</span> User Friendly
                </div>
                <div>FazzPay come up with modern and sleek design and not complicated.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 pt-24 pb-20 bg-[#f5f5f5]">
          <div className="text-center mb-10">
            <div className="text-4xl lg:text-6xl font-bold mb-12">
              What Users are <span className="text-[#10A19D]">Saying.</span>
            </div>
            <div>
              We have some great features from the application and it’s totally free <br /> to use by all users around the world.
            </div>
          </div>

          <div className="flex gap-3 md:gap-6 lg:gap-10 items-center">
            <div className="w-[50px]">
              <button className="bg-white p-3 rounded-xl">
                <img src="/arrow-left.svg" />
              </button>
            </div>

            <div className="card w-full bg-white">
              <div className="pt-5 px-6 md:px-12 lg:px-16 pb-10 flex flex-col items-center text-center">
                <div className="mb-5">
                  <img src="/profile1.svg" />
                </div>
                <div className="font-bold mb-2 text-xl">Alex Hansinburg</div>
                <div className="mb-7">Designer</div>
                <div className="max-h-[100px] overflow-y-auto">
                  “This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just
                  try this app and see the power!”
                </div>
              </div>
            </div>

            <div className="w-[50px]">
              <button className="bg-white p-3 rounded-xl">
                <img src="/arrow-right.svg" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="
      bg-[#10A19D] px-6 md:px-12 lg:px-16 py-14 text-white"
      >
        <div className="text-2xl font-bold mb-8">Easy-Pay</div>
        <div className="mb-8">
          Simplify financial needs and saving <br /> much time in banking needs with <br /> one single app.
        </div>
        <hr />
        <div className="flex flex-col md:flex-row mt-5 gap-10">
          <div className="grow">2020 Easy-pay. All right reserved.</div>
          <div>+62 5637 8882 9901</div>
          <div>contact@easy-pay.com</div>
        </div>
      </footer>
    </>
  );
}
