import { ArrowUpRight } from "lucide-react";
import { Link, useLoaderData } from "@remix-run/react";
import { SquareArrowOutUpRight } from "lucide-react";
import GradientText from "./GradientText";
import Button from "~/components/Buttons";
import { MonlamProduct, socialMedia } from "~/lib/constants";
const Footer = () => {
  const { user } = useLoaderData();
    
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <GradientText style="gray">
          <div className="text-center text-[55px]">
            Translation Reimagined.
            <br /> Available Today.
          </div>
        </GradientText>
        <Button color="neutral" className=" py-2 px-4 my-10">
          <Link to={user?"/dashboard":"/login"}> Get Started </Link>
        </Button>
      </main>

      {/* Footer */}
      <footer className="px-8 py-6 border-t">
        <div className="mx-auto flex flex-wrap justify-between items-start gap-8">
          <div className="flex flex-col space-y-6">
            <span className="text-bold">
              <p className="text-sm font-medium">
                Monlam It & Research Center,
              </p>
              <p className="text-sm font-medium">Dharamshala - 176215,</p>
              <p className="text-sm font-medium">Distt. Kangra (H.P) - India</p>
            </span>

            <div className="flex items-center gap-2">
              <span className="text-neutral-800 font-medium">Product of</span>
              <div
                className="h-8 w-8 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #B39646 100%)",
                }}
              >
                <img
                  src="/assets/monlam.png"
                  alt="monlam"
                  className="h-4 w-5"
                />
              </div>
              <span className="text-neutral-800 font-semibold">Monlam AI</span>
            </div>

            <div className="flex gap-4">
              {socialMedia.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-primary-700 rounded-full p-2"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">More from MonlamAI</h3>
            <div className="space-y-2">
              {MonlamProduct.map(
                (item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-end gap-2 text-neutral-800 hover:text-neutral-900"
                  >
                    <a
                      target="_blank"
                      href={item.link}
                      className="flex items-center gap-1 text-sm font-medium"
                    >
                      {item.name}
                      <SquareArrowOutUpRight
                        size={15}
                        className="text-black ml-1"
                      />
                    </a>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
