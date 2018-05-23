///////////////
// HopeCards //
///////////////
import HopecardsCover from 'client/images/projects/Hopecards/hopecards-cover.jpg';
import HopecardsHomepage from 'client/images/projects/Hopecards/hopecards-homepage.jpg';
import HopecardsStep2 from 'client/images/projects/Hopecards/hopecards-step-2.jpg';
import HopecardsStep3 from 'client/images/projects/Hopecards/hopecards-step-3.jpg';
import HopecardsDedication from 'client/images/projects/Hopecards/hopecards-dedication-page.jpg';
import HopecardsFavorites from 'client/images/projects/Hopecards/hopecards-favorites.jpg';
import HopecardsImpact from 'client/images/projects/Hopecards/hopecards-impact.jpg';

/////////
// HYM //
/////////
import HYMCover from 'client/images/projects/HonorYourMom/HYM-cover.jpg';
import HYMHomepage from 'client/images/projects/HonorYourMom/HYM-homepage.jpg';
import HYMStep1 from 'client/images/projects/HonorYourMom/HYM-step-1.jpg';
import HYMStep2 from 'client/images/projects/HonorYourMom/HYM-step-2.jpg';
import HYMStep3 from 'client/images/projects/HonorYourMom/HYM-step-3.jpg';
import HYMAbout from 'client/images/projects/HonorYourMom/HYM-about.jpg';
import HYMHonoredMoms from 'client/images/projects/HonorYourMom/HYM-honored-moms.jpg';
import HYMHonoredMom from 'client/images/projects/HonorYourMom/HYM-honored-mom.jpg';

////////////////
// ConceptMap //
////////////////
import CMCover from 'client/images/projects/ConceptMap/concept-map-cover.png';
import CMZeroState from 'client/images/projects/ConceptMap/concept-map-zero-state.png';
import CMTutorial1 from 'client/images/projects/ConceptMap/concept-map-tutorial-1.png';
import CMTutorial2 from 'client/images/projects/ConceptMap/concept-map-tutorial-2.png';
import CMTutorial3 from 'client/images/projects/ConceptMap/concept-map-tutorial-3.png';
import CMGraphMathScience from 'client/images/projects/ConceptMap/concept-map-graph-science-math.png';
import CMGraphScience from 'client/images/projects/ConceptMap/concept-map-graph-science.png';
import CMGraphMath from 'client/images/projects/ConceptMap/concept-map-graph-math.png';
import CMGraphZoomedOut from 'client/images/projects/ConceptMap/concept-map-graph-zoomed-out.png';
import CMNodeDetails from 'client/images/projects/ConceptMap/concept-map-node-details.png';
import CMTutorial4 from 'client/images/projects/ConceptMap/concept-map-tutorial-4.png';
import CMEditor from 'client/images/projects/ConceptMap/concept-map-editor.png';

//////////////////////
// TeacherDashboard //
//////////////////////
import DBCover from 'client/images/projects/TeacherDashboard/dashboard-cover.png';
import DBContent from 'client/images/projects/TeacherDashboard/dashboard-content.png';
import DBContentStandards from 'client/images/projects/TeacherDashboard/dashboard-content-standards.png';
import DBGroups from 'client/images/projects/TeacherDashboard/dashboard-groups.png';
import DBUserProfileEdit from 'client/images/projects/TeacherDashboard/dashboard-user-profile-edit.png';


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


function projects( state = initialState, action = {} ) {
    switch ( action.type ) {
    default:
        return state;
    }
}

export default projects;
