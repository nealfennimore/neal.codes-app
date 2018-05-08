///////////////
// HopeCards //
///////////////
import HopecardsCover from 'images/projects/Hopecards/hopecards-cover.jpg';
import HopecardsHomepage from 'images/projects/Hopecards/hopecards-homepage.jpg';
import HopecardsStep2 from 'images/projects/Hopecards/hopecards-step-2.jpg';
import HopecardsStep3 from 'images/projects/Hopecards/hopecards-step-3.jpg';
import HopecardsDedication from 'images/projects/Hopecards/hopecards-dedication-page.jpg';
import HopecardsFavorites from 'images/projects/Hopecards/hopecards-favorites.jpg';
import HopecardsImpact from 'images/projects/Hopecards/hopecards-impact.jpg';

/////////
// HYM //
/////////
import HYMCover from 'images/projects/HonorYourMom/HYM-cover.jpg';
import HYMHomepage from 'images/projects/HonorYourMom/HYM-homepage.jpg';
import HYMStep1 from 'images/projects/HonorYourMom/HYM-step-1.jpg';
import HYMStep2 from 'images/projects/HonorYourMom/HYM-step-2.jpg';
import HYMStep3 from 'images/projects/HonorYourMom/HYM-step-3.jpg';
import HYMAbout from 'images/projects/HonorYourMom/HYM-about.jpg';
import HYMHonoredMoms from 'images/projects/HonorYourMom/HYM-honored-moms.jpg';
import HYMHonoredMom from 'images/projects/HonorYourMom/HYM-honored-mom.jpg';

////////////////
// ConceptMap //
////////////////
import CMCover from 'images/projects/ConceptMap/concept-map-cover.png';
import CMZeroState from 'images/projects/ConceptMap/concept-map-zero-state.png';
import CMTutorial1 from 'images/projects/ConceptMap/concept-map-tutorial-1.png';
import CMTutorial2 from 'images/projects/ConceptMap/concept-map-tutorial-2.png';
import CMTutorial3 from 'images/projects/ConceptMap/concept-map-tutorial-3.png';
import CMGraphMathScience from 'images/projects/ConceptMap/concept-map-graph-science-math.png';
import CMGraphScience from 'images/projects/ConceptMap/concept-map-graph-science.png';
import CMGraphMath from 'images/projects/ConceptMap/concept-map-graph-math.png';
import CMGraphZoomedOut from 'images/projects/ConceptMap/concept-map-graph-zoomed-out.png';
import CMNodeDetails from 'images/projects/ConceptMap/concept-map-node-details.png';
import CMTutorial4 from 'images/projects/ConceptMap/concept-map-tutorial-4.png';
import CMEditor from 'images/projects/ConceptMap/concept-map-editor.png';

//////////////////////
// TeacherDashboard //
//////////////////////
import DBCover from 'images/projects/TeacherDashboard/dashboard-cover.png';
import DBContent from 'images/projects/TeacherDashboard/dashboard-content.png';
import DBContentStandards from 'images/projects/TeacherDashboard/dashboard-content-standards.png';
import DBGroups from 'images/projects/TeacherDashboard/dashboard-groups.png';
import DBUserProfileEdit from 'images/projects/TeacherDashboard/dashboard-user-profile-edit.png';


const initialState = [
    {
        id: 0,
        title: 'Hope Cards',
        subtitle: 'Greeting cards that help save lifes',
        description: 'Launched on Giving Tuesday and while very similar to the Honor Your Mom app, it instead allowed users to send multiple greeting cards to different addresses.',
        coverImage: HopecardsCover,
        images: [
            HopecardsHomepage,
            HopecardsStep2,
            HopecardsStep3,
            HopecardsDedication,
            HopecardsFavorites,
            HopecardsImpact
        ]
    },
    {
        id: 1,
        title: 'Honor Your Mom',
        subtitle: 'A tribute to moms everywhere',
        description: `For Mother's Day, people can make a donation in their mother's name by uploading an image and having a custom postcard sent out to their address. Their mom will also have a dedication page that lives up on the site.

        This Rails app was retooled by me for better integration with services we used in the organization.`,
        coverImage: HYMCover,
        images: [
            HYMHomepage,
            HYMStep1,
            HYMStep2,
            HYMStep3,
            HYMAbout,
            HYMHonoredMoms,
            HYMHonoredMom
        ]
    },
    {
        id: 2,
        title: 'Concept Map',
        subtitle: 'Showing the interrelatedness between concepts',
        description: `Explore connections in Math and Science utilizing an interactive visual map.

        A fully responsive D3.js application, with a functioning graph editor, to better show how different math and science content is related.
        `,
        url: 'https://www.ck12.org/conceptmap',
        coverImage: CMCover,
        images: [
            CMZeroState,
            CMTutorial1,
            CMTutorial2,
            CMTutorial3,
            CMTutorial4,
            CMGraphMathScience,
            CMGraphScience,
            CMGraphMath,
            CMGraphZoomedOut,
            CMNodeDetails,
            CMEditor
        ]
    },
    {
        id: 3,
        title: 'Teacher Dashboard',
        subtitle: 'A modern teacher dashboard',
        description: `Revamped site-wide teacher dashboard with react and redux.

        Allows for better group organization and content finding.`,
        url: 'https://www.ck12.org/my/dashboard-new',
        coverImage: DBCover,
        images: [
            DBContent,
            DBContentStandards,
            DBGroups,
            DBUserProfileEdit
        ]
    },
];


function projects(state=initialState, action={}) {
    switch (action.type) {
    default:
        return state;
    }
}

export default projects;
