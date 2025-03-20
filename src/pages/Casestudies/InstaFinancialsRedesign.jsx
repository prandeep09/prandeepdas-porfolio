import Navbar from "../../components/groups/Navbar";
import Avatar from "../../components/atoms/Avatar";
import Paragraph from "../../components/atoms/Paragraph";
import BlurCircle from "../../assets/blur-circle.svg";
import InstaFAvatar from "../../assets/Instafinacials-avatar.svg";
import InstaFinHeroImage from "../../assets/Insafinancials hero image.svg";
import InstaFinOldHeroImage from "../../assets/InstaFinancials old website hero section.svg";
import InstaFinUsabilitytesting from "../../assets/usability testing session.svg";
import InstaFinBrainStorming from "../../assets/brain storming session.svg";
import InstaFinCardSorting from "../../assets/Card sorting exercise.svg";
import InstaFinCompetitors from "../../assets/Instafinancials competitirs.svg";
import InstaFinSolutionIA from "../../assets/image-Restructuring the Information Architecture.svg";
import InstaFinOldSearch from "../../assets/image-old instafinancials search.svg";
import InstaFinNewSearch from "../../assets/image-new instafinancials search.svg";
import InstaFinNewUIs from "../../assets/updated new UI.svg";
import InstaFinNewAbout from "../../assets/image-InstaFinancials about page.svg";
import InstaFinNewProduct from "../../assets/image-InstaFinancials product page.svg";
import InstaFinNewLogin from "../../assets/image-InstaFinancials login page.svg";
import InstaFinTypeface from "../../assets/image-Typography & Color Rebranding.svg";
import InstaFinSignupwInfo from "../../assets/image signup UI with info.svg";
import InstaFinLoginwInfo from "../../assets/image login UI with info.svg";
import InstaFinBriskwithInfo from "../../assets/image-Brisk page.svg";
import InstaFinCompanyOverviewwithInfo from "../../assets/Company Overview Page.svg";
import InstaFinNewSearchExp from "../../assets/image-new search.svg";
import InstaFinNewAssets from "../../assets/image- icon and illustration.svg";
import Breadcrumb from "../../components/molecules/Breadcrump";

// CSS
import "../../CSS/case-study.css";
import ImageSlider from "../../components/molecules/ImageSlider";
import ScrollProgress from "../../components/molecules/ScrollProgress";

const InstaFinancialsRedesign = () => {
  const images = [InstaFinNewLogin, InstaFinNewProduct, InstaFinNewAbout];
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Case study - InstaFinancials redesign", path: "/casestudy02" },
    // { label: "Electronics", path: "/products/electronics" },
  ];
  return (
    <>
      <ScrollProgress />
      <div className="hero casestudy-wrapper ">
        <div className="Blur__Circle--Container">
          <img src={BlurCircle} alt="" />
        </div>
        <Navbar />
        <section>
          <div className="hero__wrapper">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="heading__XL mg-b-32 zi-1">
              How I Transformed a B2B Fintech Website with Limited Resources: A
              UI/UX Case Study
            </h1>
            <div className="mg-b-32">
              <Avatar
                image={InstaFAvatar}
                title="InstaFinancials"
                description="2018-21"
              />
            </div>
            <div className="zi-1 mg-b-32">
              <img
                src={InstaFinHeroImage}
                alt="InsatFinancials company website hero section"
                className="w-100"
              />
            </div>
            <div className="d-flex justify-between">
              <div>
                <h6 className="label__S fw-bold">Industry</h6>
                <p className="paragraph__small">
                  Financial
                  <br />
                  Technology
                </p>
              </div>
              <div>
                <h6 className="label__S  fw-bold">Platform</h6>
                <p className="paragraph__small">Web application</p>
              </div>
              <div>
                <h6 className="label__S  fw-bold">Role</h6>
                <p className="paragraph__small">
                  UI/UX Research, design & <br /> development
                </p>
              </div>
              <div>
                <h6 className="label__S  fw-bold">User</h6>
                <p className="paragraph__small">
                  NBFC sector, <br /> Company directors
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="heading__M mg-b-16">Context</h3>
            <Paragraph>
              In 2018, I joined InstaFinancials, a fintech company that provides
              financial insights on businesses. The website was a goldmine of
              data, but navigating it felt like wandering through a maze. Users
              struggled to find information, the design looked outdated, and the
              development process lacked structure. As the sole UX designer and
              UI developer, I took on the challenge of transforming the platform
              with limited resources.
            </Paragraph>
          </div>
        </section>
        <section className="mg-t-40 ">
          <h3 className="heading__M mg-b-16">The Problem</h3>
          <Paragraph>
            When I analyzed stakeholder feedback and performed some heuristic
            evaluation, I found three major issues:
          </Paragraph>
          <ul>
            <li>
              <Paragraph>
                <strong>Confusing Information Architecture :</strong>
                Users couldn’t find the data they needed quickly.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Outdated Look & Feel:</strong>
                The design lacked consistency, reducing trust in the brand.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Inefficient Development Workflow:</strong> No frontend
                coding standards led to slow implementation and redundant code.
              </Paragraph>
            </li>
          </ul>
          <Paragraph>
            The result? High drop-offs, bounce rate and low engagement.
          </Paragraph>
          <div className="mg-t-40 hw">
            <img
              src={InstaFinOldHeroImage}
              alt="Screenshot of the homepage of the old InstaFinancials website."
              className="w-100"
            />
            <span className="label__S">
              Screenshot of the homepage of the old InstaFinancials website
            </span>
          </div>
        </section>
        <section className="mg-t-40">
          <h3 className="heading__M mg-b-16">The Process</h3>
          <Paragraph>
            With no dedicated UX research team, I had to get creative. I started
            by:
          </Paragraph>
          <ul>
            <li>
              <Paragraph>
                <strong>Conducting competitor analysis </strong>
                to understand what similar platforms did well.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Gathering user and stakeholder feedback </strong>
                from meetings.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Analyzing website heatmaps</strong> to track user
                behavior and identify friction points.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Collaborating </strong> with marketing and operations
                teams for cross-functional insights.
              </Paragraph>
            </li>
          </ul>
          <div className="d-grid-2x2 gap-16 mg-t-40 hw">
            <div>
              <img
                src={InstaFinUsabilitytesting}
                alt="A usability testing session with teammate."
                className="w-100"
              />
              <span className="label__S">
                A usability testing session with teammate
              </span>
            </div>
            <div>
              <img
                src={InstaFinBrainStorming}
                alt="A brainstorming session at InstaFinancials"
                className="w-100"
              />
              <span className="label__S">
                A brainstorming session at InstaFinancials
              </span>
            </div>
            <div>
              <img
                src={InstaFinCardSorting}
                alt="Card sorting exercise."
                className="w-100"
              />
              <span className="label__S">Card sorting exercise</span>
            </div>
            <div>
              <img
                src={InstaFinCompetitors}
                alt="Some InstaFInancials direct and indirect competitors; Tofler, Zauba Corp 
and Crunchbase "
                className="w-100"
              />
              <span className="label__S">
                Some InstaFInancials direct and indirect competitors; Tofler,
                Zauba Corp and Crunchbase
              </span>
            </div>
          </div>
        </section>
        <section className="mg-t-40">
          <h3 className="heading__M mg-b-16">The Solution</h3>
          <h4 className="heading__S mg-t-24 mg-b-12">
            Restructuring the Information Architecture
          </h4>
          <Paragraph>
            Users wanted a faster way to find relevant financial data. I
            reorganized the navigation by categorizing content based on user
            needs, simplifying menus, and improving search functionality. The
            new navigation also introduced detailed sub-sections for products
            and pricing, allowing users to quickly explore relevant offerings.
          </Paragraph>
          <div className="mg-t-40 hw">
            <img
              src={InstaFinSolutionIA}
              alt="A comparison to show the change in Information Architecture of the navigation bar between old and new UI."
              className="w-100"
            />
            <span className="label__S">
              A comparison to show the change in Information Architecture of the
              navigation bar between old and new UI
            </span>
          </div>
          <div className="d-grid-2x2 gap-16 mg-t-40 hw">
            <div>
              <img
                src={InstaFinOldSearch}
                alt="Information Architecture of the search between old UI"
                className="w-100"
              />
              <span className="label__S">
                Information Architecture of the search between old UI
              </span>
            </div>
            <div>
              <img
                src={InstaFinNewSearch}
                alt="Information Architecture of the search between new UI"
                className="w-100"
              />
              <span className="label__S">
                Information Architecture of the search between new UI
              </span>
            </div>
          </div>
        </section>
        <section className="mg-t-40">
          <h4 className="heading__S mg-t-24 mg-b-12">Modernizing the UI</h4>
          <Paragraph>
            To build user trust, I focused on clarity and consistency:
          </Paragraph>
          <ul>
            <li>
              <Paragraph>
                <strong>Updated typography and color schemes </strong>
                for a clean, professional look.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Standardized icons and images </strong>
                to reinforce brand identity.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Designed a grid-based layout</strong> to track user to
                improve data readability.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>
                  Streamlined product pages with consistent icons and template{" "}
                </strong>{" "}
                approach.
              </Paragraph>
            </li>
          </ul>
          <ImageSlider images={images} />
        </section>
        <section className="mg-t-40">
          <h4 className="heading__S mg-t-24 mg-b-12">
            Typography & Color Rebranding
          </h4>
          <Paragraph>
            As part of the redesign, I introduced a fresh typeface and updated
            the color system to modernize the brand’s identity:
          </Paragraph>
          <ul>
            <li>
              <Paragraph>
                <strong>Typography: </strong>
                Updated the primary and secondary fonts from Karla and Verdana
                to Lato and Montserrat, offering a more contemporary and
                readable look.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Color Palette: </strong>
                Retained the original brand color but enhanced it with two
                gradient variations to create a dynamic and engaging visual
                appeal.
              </Paragraph>
            </li>
          </ul>
          <div className="mg-t-40 hw">
            <img
              src={InstaFinTypeface}
              alt="New typeface Lato and Montserrat  with new color gradients"
              className="w-100"
            />
            <span className="label__S">
              New typeface Lato and Montserrat with new color gradients
            </span>
          </div>
        </section>
        <section className="mg-t-40">
          <h4 className="heading__S mg-t-24 mg-b-12">
            Enhancing Key Pages & Features
          </h4>
          <div className="mg-t-40">
            <Paragraph>
              <strong>New Onboarding Flow: </strong>
              Replaced the long registration form with a multi-step soft
              onboarding experience that included social login options, reducing
              friction for new users.
            </Paragraph>
          </div>
          <div className="mg-t-24 hw">
            <img
              src={InstaFinLoginwInfo}
              alt="New login UI with social login option"
              className="w-100"
            />
            <span className="label__S">
              New login UI with social login option
            </span>
          </div>
          <div className="mg-t-24 hw">
            <img
              src={InstaFinSignupwInfo}
              alt="New sign up UI with lesser field and captch security"
              className="w-100"
            />
            <span className="label__S">
              New sign up UI with lesser field and captch security
            </span>
          </div>
          <div className="mg-t-40 hw">
            <Paragraph>
              <strong>Brisk Page: </strong>
              Designed an MVP for Brisk with a focus on modularity, aligning
              with the product vision.
            </Paragraph>
          </div>
          <div className="mg-t-24 hw">
            <img
              src={InstaFinBriskwithInfo}
              alt="BRisk product page UI"
              className="w-100"
            />
            <span className="label__S">BRisk product page UI</span>
          </div>
          <div className="mg-t-40 hw">
            <Paragraph>
              <strong>Company Overview Page: </strong>
              Improved content hierarchy and layout for a clearer presentation
              of company data.
            </Paragraph>
          </div>
          <div className="mg-t-24 hw">
            <img
              src={InstaFinCompanyOverviewwithInfo}
              alt="Company overview page with company data, search, quick links and other features"
              className="w-100"
            />
            <span className="label__S">
              Company overview page with company data, search, quick links and
              other features
            </span>
          </div>
          <div className="mg-t-40 hw">
            <Paragraph>
              <strong>New Search Experience: </strong>
              Enhanced the search feature to display company status, location,
              and CIN (Corporate Identification Number) for more useful results.
            </Paragraph>
          </div>
          <div className="mg-t-24 hw">
            <img
              src={InstaFinNewSearchExp}
              alt="New search presentation with quick related result"
              className="w-100"
            />
            <span className="label__S">
              New search presentation with quick related result
            </span>
          </div>
          <div className="mg-t-40 hw">
            <Paragraph>
              <strong>Consistent Icons & Illustrations: </strong>
              Ensured that all new design elements were cohesive, aligned with
              branding, and visually consistent.
            </Paragraph>
          </div>
          <div className="mg-t-24 hw">
            <img
              src={InstaFinNewAssets}
              alt="Some newly design UI assets such as icon, illustration"
              className="w-100"
            />

            <span className="label__S">
              Some newly design UI assets such as icon, illustration
            </span>
          </div>
          {/* TODO: Add one more section to show responsiveness */}
        </section>
        <section className="mg-t-40">
          <h4 className="heading__S mg-t-24 mg-b-12">
            Optimizing Development Standards
          </h4>
          <Paragraph>
            Since I was also handling front-end development, I streamlined the
            codebase:
          </Paragraph>
          <ul>
            <li>
              <Paragraph>
                <strong>Implemented reusable UI components </strong>
                to speed up future development.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Established coding guidelines </strong>
                to maintain consistency
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Used SCSS </strong> for better code organization and
                maintainability.
              </Paragraph>
            </li>
          </ul>
        </section>
        <section className="mg-t-40">
          <h3 className="heading__M mg-b-16">Challenges Faced</h3>
          <ul>
            <li>
              <Paragraph>
                <strong>Prioritization of Ideas: </strong>
                with so many possible improvements, I had to focus on
                high-impact and low changes first
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Limited UX Awareness </strong>
                educating stakeholders on UX best practices was crucial to
                getting buy-in.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Resource Constraints </strong>I had to wear multiple
                hats, from UX researcher to UI designer to front-end developer.
              </Paragraph>
            </li>
          </ul>
        </section>
        <section className="mg-t-40">
          <h3 className="heading__M mg-b-16">The Impact</h3>
          <Paragraph>The redesign led to tangible improvements:</Paragraph>
          <ul>
            <li>
              <Paragraph>
                <strong>Faster task completion rate </strong>
                for users searching for financial data
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Improved brand perception, </strong>
                leading to increased customer trust and engagement.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>More scalable development process, </strong>reducing
                future technical debt.
              </Paragraph>
            </li>
          </ul>
        </section>
        <section className="mg-t-40">
          <h3 className="heading__M mg-b-16">Key Takeaways</h3>
          <Paragraph>
            Resource constraints can fuel creativity. I leveraged
            cross-functional collaboration to fill research gaps. Data should
            drive design decisions. User insights and analytics guided every
            change. Consistency is key. A well-structured user interface
            enhances usability and trust.
          </Paragraph>
        </section>
        <section className="mg-t-40">
          <h3 className="heading__M mg-b-16">
            The Impact: 75% Faster Task Completion
          </h3>
          <Paragraph>
            This project taught me that good UX is a balance of good visuals and
            better usability, it’s about making users’ lives easier. By focusing
            on structure, simplicity, and efficiency, I helped turn
            InstaFinancials into a more user-friendly platform, even with
            limited resources.
            <br />
          </Paragraph>
          <Paragraph>
            If you’re a hiring manager looking for a Senior Product/UI UX
            Designer who blends UX research, UI design, and a bit of frontend
            development to create meaningful impact, let’s connect! <br />
            <br /> 📩 prandeepdas.jobs24@gmail.com <br />
            <hr />
            Would love to hear your thoughts—have you ever worked on a redesign
            that started from an unexpected place? You can mail your thoughts to
            me 📧
          </Paragraph>
        </section>
      </div>
    </>
  );
};

export default InstaFinancialsRedesign;
