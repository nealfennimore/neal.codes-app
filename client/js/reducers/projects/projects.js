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
    // {
    //     title: 'Concept Map',
    //     subtitle: 'A tribute to moms everywhere',
    //     coverImage: HYMCover,
    //     images: [
    //         HYMCover
    //     ]
    // },
    // {
    //     title: 'Teacher Dashboard',
    //     subtitle: 'A tribute to moms everywhere',
    //     coverImage: HYMCover,
    //     images: [
    //         HYMCover
    //     ]
    // },
];


function projects(state=initialState, action) {
    switch (action.type) {
    default:
        return state;
    }
}

export default projects;