import Badge from "../components/Badge";
import Separator from "../components/Seperator";
import Image from "next/image";
import srsNews from "../../public/srs-news.png";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Abhiram",
	description:
		"I'm a Full Stack Web Developer, dedicated to making the web a little more awesome.",
	openGraph: {
		title: "Abhiram",
		description:
			"I'm a Full Stack Web Developer, dedicated to making the web a little more awesome.",
		url: "https://abhiramsriramoji.vercel.app/",
		siteName: "Abhiram's Portfolio",
		images: [
			{
				url: "/home_preview.png",
				height: 630,
				alt: "Abhiram",
			},
		],
		type: "website",
	}
};

export default function Home() {
  return (
    <section>
      <header>
        <h2 className='font-medium text-2xl mb-2 tracking-tight font-["monospace"]'
          >Sup, I &apos; m Abhiram 👋</h2>
        <p>
          I &apos; m a Full Stack Web Developer from Hyderabad, India, trying to make the
          internet a bit cooler one website at a time.
        </p>
      </header>
      <Separator />
      <div>
        <h2 className="font-semibold font-['monospace'] text-xl my-4">Professionall Work</h2>

        <p className="align-middle">
          I specailised in building scalable and responsive web applications. Currently I
          Working as Freelance Full stack Developer at{" "}
          <span>
            <Badge href="https://srs-news.vercel.app/">
              <Image
                src={srsNews}
                alt="10kcoders"
                width={18}
                className="mr-1"
              />
              SRS News
            </Badge>
          </span>{" "}
          Where we building Regional News Blog.{" "}
        </p>
        <br />
        <p>
          One of my most significant achievements is developing{" "}
          <Badge href="https://shopnest.in/">
            <Image
              alt="ShopNest"
              src={"/shopnest.png"}
              height={18}
              width={18}
              className="mr-1"
            />
            ShopNest
          </Badge>{" "}
          , a E-commerce platform that revolutionized the online shopping
          experience. For more of my projects, visit the{" "}
          <span>
            <a href="/projects" className="underline font-mono">
              Projects
            </a>
          </span>{" "}
          page.
        </p>
      </div>
      <Separator />
      <div>
        <h2 className="font-semibold text-xl my-4">Leadership & Community</h2>
        <p>
          I &apos;ve learned how to lead a team and stay organised. I also assist my
          friends with their projects by troubleshooting and solving bugs,
          helping them optimize their code and improve their applications.
        </p>
      </div>
      <Separator />
      <div>
        <h2 className="font-semibold text-xl my-4">Personal Interests</h2>
        <p>Outside of work, I enjoy Reading Comics, Playing Chess and spending time with family and friends.</p>
      </div>
    </section>
  );
}
