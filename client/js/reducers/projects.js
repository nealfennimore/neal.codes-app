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
        title: 'Hope Cards',
        subtitle: 'Greeting cards that help save lifes',
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
        title: 'Honor Your Mom',
        subtitle: 'A tribute to moms everywhere',
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