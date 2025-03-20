import Navbar from "../../components/groups/Navbar";
import Avatar from "../../components/atoms/Avatar";
import Paragraph from "../../components/atoms/Paragraph";
import ImageSlider from "../../components/molecules/ImageSlider";
import cricketWAvatar from "../../assets/CricketW-avatar.svg";
import CSSHeroImage from "../../assets/ChangeSubStatus-HeroImage.svg";
import BlurCircle from "../../assets/blur-circle.svg";
import FustratedRep from "../../assets/Frustrated customer care representative.png";
import CSSOldScreen from "../../assets/ChangeSubStatus-OldScreen.svg";
import CSSOldFlowChart from "../../assets/change subscriber status old flow chart.svg";
import CSSNewFlowChart from "../../assets/change subscriber status new flow chart.svg";
import CSSFullStoryRecording from "../../assets/FullStory analytics screen record.svg";
import CSSIteration01 from "../../assets/Change subscriber status solution 1.svg";
import CSSFinal from "../../assets/Change subscriber status final.svg";
import CSSConfirmation from "../../assets/Change subscriber status confirmatio.svg";
import CSSSuccess from "../../assets/Change subscriber status success.svg";
import CSSImpact from "../../assets/Change subscriber status impact.svg";
import Breadcrumb from "../../components/molecules/Breadcrump";

// CSS
import "../../CSS/case-study.css";
import ScrollProgress from "../../components/molecules/ScrollProgress";

const ChangeSubscribeStatus = () => {
  const images = [CSSFinal, CSSConfirmation, CSSSuccess, CSSOldScreen];
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Case study - Cricket Wireless", path: "/casestudy01" },
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
              How I Helped Cricket Wireless Reduce&nbsp;
              <span className="clr-red">Task Time by 75%: </span>A UI/UX Case
              Study
            </h1>
            <div className="mg-b-32">
              <Avatar
                image={cricketWAvatar}
                title="Cricket Wireless"
                description="2023"
              />
            </div>
            <div className="zi-1 mg-b-32">
              <img
                src={CSSHeroImage}
                alt="Change subscriber status feature user interface"
                className="w-100"
              />
            </div>
            <div className="d-flex justify-between">
              <div>
                <h6 className="label__S fw-bold">Industry</h6>
                <p className="paragraph__small">
                  Customer management system, <br />
                  Telecommunication
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
                  Customer care representative, <br /> Manager
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="heading__M mg-b-16">Context</h3>
            <Paragraph>
              Imagine you’re a customer care representative at a telecom
              company. Your day starts with customer queries, one after another.
              A customer calls in—maybe they lost their phone or want to change
              their service status. You navigate through the system, following a
              complex, multi-step process, clicking through multiple screens,
              waiting for responses, all while trying to keep the conversation
              flowing.{" "}
              <strong>
                Every second counts, but the system isn't on your side.
              </strong>
              <br />
              This was the reality for thousands of reps at Cricket Wireless.
              And this is the story of{" "}
              <strong>
                how I helped transform their workflow, reducing task completion
                time (TCT) from 8 minutes to just 2.
              </strong>
              <br />
              <br />
              I’d love to show you my Figma file but I am not allowed to do
              that.
              {/* Therefore for better understanding I have created some lo-fi
              lookalikes. */}
            </Paragraph>
            <div className="mg-t-40 hw">
              <img
                src={FustratedRep}
                alt="A frustrated customer care representative dealing with a complex workflow on their screen."
                className="w-100"
              />
              <span className="label__S">
                A frustrated customer care representative dealing with a complex
                workflow on their screen.
              </span>
            </div>
          </div>
        </section>
        <section className="mg-t-40 ">
          <h3 className="heading__M mg-b-16">
            The Problem: A Slow, Cumbersome Process
          </h3>
          <Paragraph>
            When I joined the project, the process for changing a subscriber’s
            status was inefficient and frustrating:
          </Paragraph>
          <ul>
            <li>
              <Paragraph>
                <strong>Multiple steps: </strong>
                Reps had to navigate through 4-5 screens to complete a simple
                status change.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Unnecessary interactions: </strong>
                Users repeatedly selected the same options across different
                steps.{" "}
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Legacy code issues:</strong> The existing system was
                built on outdated code, making new design implementations
                difficult.
              </Paragraph>
            </li>
          </ul>
          <Paragraph>
            The result? Increased Average Handle Time (AHT), higher operational
            costs, and frustrated reps.
          </Paragraph>
          <div className="mg-t-40 hw">
            <img
              src={CSSOldScreen}
              alt="A lo-fi wireframe of the old, multi-step subscriber status change UI."
              className="w-100"
            />
            <span className="label__S">
              A lo-fi wireframe of the old, multi-step change subscriber status
              UI.
            </span>
          </div>
          <div className="mg-t-40 hw">
            <img
              src={CSSOldFlowChart}
              alt="A userflow of the old, multi-step schange subscriber status UI."
              className="w-100"
            />
            <span className="label__S">
              A userflow of the old, multi-step change subscriber status UI.
            </span>
          </div>
        </section>
        <section className="mg-t-40">
          <h3 className="heading__M mg-b-16">
            The Accidental Opportunity: A Refactor That Led to a Redesign
          </h3>
          <Paragraph>
            Initially, the project started as a frontend code refactor. However,
            as we dug deeper, we realized this was an opportunity to do more
            than just improve performance;{" "}
            <strong>we could redesign the experience.</strong>
          </Paragraph>
          <h4 className="heading__S mg-t-24 mg-b-12">
            Research: Understanding the Real Pain Points
          </h4>
          <Paragraph>
            I started by analyzing session recordings using{" "}
            <a
              href="https://www.fullstory.com/"
              target="blank"
              className="link"
            >
              FullStory
            </a>
            , a behavioral analytics tool. This helped me identify friction
            points in the workflow. I also extracted Jira story points, which
            revealed that even{" "}
            <strong>small changes took 3-5 days to implement</strong> due to the
            complexity of the existing flow
            <br />
            To validate our findings, I conducted:
          </Paragraph>
          <ul>
            <li>
              <Paragraph>
                <strong>Usability testing </strong>
                sessions with testers and peers
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>
                  Discussions with product owners and interviewed vendor
                  managers
                </strong>
                (represents user)
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Discussion with the developers</strong>
              </Paragraph>
            </li>
          </ul>
          <Paragraph>
            These efforts led to a key insight: The primary bottleneck wasn’t
            just the number of steps, it was the <strong>mental load</strong>{" "}
            caused by redundant actions and scattered UI elements.
          </Paragraph>
          <div className="mg-t-40 hw">
            <img
              src={CSSFullStoryRecording}
              alt="Observing a FullStory recorded session to understand user flow and user pain points"
              className="w-100"
            />
            <span className="label__S">
              Observing a FullStory recorded session to understand user flow and
              pain points
            </span>
          </div>
        </section>
        <section className="mg-t-40">
          <h3 className="heading__M mg-b-16">
            The Solution: A Simpler, More Intuitive Workflow
          </h3>
          <Paragraph>
            I explored several design solutions, but the breakthrough came from
            an unexpected place —{" "}
            <strong>Jira’s drag-and-drop functionality</strong>. Inspired by its
            simplicity, I proposed a tab-based UI with drag-and-drop
            interactions.
          </Paragraph>
          <h4 className="heading__S mg-t-24 mg-b-12">
            Iteration 1: The Cleanup
          </h4>
          <Paragraph>
            I began my research by reviewing pre-recorded sessions from
            FullStory to understand the behavior of our customer representatives
            (Reps). I discovered a few key issues:
          </Paragraph>
          <ul>
            <li>
              <Paragraph>
                There were too many interactions, mostly involving selecting
                items from different categories.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                The process required too many steps (4-5) to complete.
              </Paragraph>
            </li>
            <li>
              <Paragraph>Some steps appeared redundant.</Paragraph>
            </li>
          </ul>
          <Paragraph>
            Discussions with the stakeholders helped me identify unnecessary
            steps in the flow. Removing those alone{" "}
            <strong>
              brought down the TCT from 8 minutes to 4.5 minutes (almost 50%)
            </strong>{" "}
            . The entire focus during this iteration was on cleaning up
            redundant and unnecessary actions. However, I did some more minor
            adjustment in the UI to make it more consistent and clean.
            Considered users suggestions and priorities like{" "}
            <strong>new columns over the selection summary</strong>, etc.
          </Paragraph>
          <div className="mg-t-40 hw">
            <img
              src={CSSIteration01}
              alt="Change subscriber status user interface after first iteration."
              className="w-100"
            />
            <span className="label__S">
              Change subscriber status user interface after first iteration.
            </span>
          </div>
          <h4 className="heading__S mg-t-40 mg-b-12">
            Iteration 2: Rethinking the UI
          </h4>
          <Paragraph>
            Even after removing redundant steps, the{" "}
            <strong>
              first step of the process still had too many interactions
            </strong>
            . Users had to manually select options from multiple dropdowns,
            slowing them down. I explored various approaches to reduce
            interactions, such as:
          </Paragraph>
          <ul>
            <li>
              <Paragraph>
                <strong>Predefined flows</strong> to minimize manual selection
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Auto-suggestions</strong> based on past selections
              </Paragraph>
            </li>
            {/* <li>
              <Paragraph>Grouping related actions together</Paragraph>
            </li> */}
          </ul>
          <Paragraph>
            None of these were effective enough. The breakthrough came from
            observing <strong>Jira’s drag-and-drop system</strong>. I proposed a
            new UI where reps could <strong>simply drag and drop</strong> a
            subscriber’s status{" "}
            <strong>instead of clicking through multiple dropdowns.</strong>
          </Paragraph>
          <ImageSlider images={images} />
        </section>
        <section className="mg-t-40">
          <h4 className="heading__S mg-b-16">Key Changes:</h4>
          <ol>
            <li>
              <Paragraph>
                <strong>Replacing search with tabs:</strong>
                Instead of searching for a device, users could instantly switch
                between “Lines” and “Devices.”
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Drag-and-drop interaction:</strong>
                Users could update a subscriber’s status in one step, rather
                than navigating multi-interactions table, dropdowns and screens.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Reducing unnecessary steps:</strong>
                By removing redundant selections, I cut down interactions
                significantly.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Use of similar UI pattern:</strong>
                Even though change was radical but a well known design pattern
                ensured an easy transition for users.
              </Paragraph>
            </li>
          </ol>
          <div className="mg-t-40 hw">
            <img
              src={CSSNewFlowChart}
              alt="Updated new user flow, drag and drop based subscriber status change process."
              className="w-100"
            />
            <span className="label__S">
              Updated new user flow, drag and drop based subscriber status
              change process.
            </span>
          </div>
        </section>
        <section className="mg-t-40">
          <h3 className="heading__M mg-b-16">
            The Impact: 75% Faster Task Completion
          </h3>
          <Paragraph>
            After implementing these changes, the results spoke for themselves:
          </Paragraph>
          <ul>
            <li>
              <Paragraph>
                <strong>Task completion time (TCT) dropped by 75%</strong>
                from 8 minutes to 2 minutes
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>
                  Average Jira story points reduced from 3-5 to 2-3,
                </strong>
                making future iterations faster
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Estimated annual savings of $20 million</strong> for
                Cricket Wireless due to improved efficiency
              </Paragraph>
            </li>
          </ul>
          <Paragraph>
            The best part? <strong>No additional training was needed</strong>
            —users intuitively adapted to the new system thanks to its familiar
            DnD UI pattern.
          </Paragraph>
          <div className="mg-t-40 hw">
            <img
              src={CSSImpact}
              alt="Post launch impact because of the new changes."
              className="w-100"
            />
            <span className="label__S">
              Post launch impact because of the new changes.
            </span>
          </div>
        </section>
        <section className="mg-t-40">
          <h3 className="heading__M mg-b-16">Lessons Learned</h3>
          <Paragraph>
            This project reinforced some crucial UX principles for me:
          </Paragraph>
          <ul>
            <li>
              <Paragraph>
                <strong>Small changes can lead to big wins:</strong>
                We didn’t need to reinvent the wheel; just remove friction.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Look for inspiration beyond your domain:</strong>A
                project management tool (Jira) ended up influencing a telecom
                workflow.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Early user testing is everything:</strong>
                Observing real user behavior helped us make the right design
                decisions upfront.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Collaboration is key:</strong>
                Working closely with developers, stakeholders, and end-users
                ensured the solution was both desirable and feasible.
              </Paragraph>
            </li>
          </ul>
        </section>
        <section className="mg-t-40">
          <h3 className="heading__M mg-b-16">Final Thoughts</h3>
          <Paragraph>
            This was more than just a UX challenge, it was about making
            someone’s workday easier, removing frustration, and driving real
            business impact. In the end, great design isn’t just about pixels or
            aesthetics; it’s about{" "}
            <strong>efficiency, usability, and problem-solving.</strong> <br />
            <br />
          </Paragraph>
          <Paragraph>
            If you’re a hiring manager looking for a Senior Product Designer who
            blends UX research, UI design, and a bit of frontend development to
            create meaningful impact, let’s connect! <br />
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

export default ChangeSubscribeStatus;
