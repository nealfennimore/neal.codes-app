import HYMCover from 'responsive!images/projects/HonorYourMom/HYM-cover.jpg';

const initialState = [
    {
        title: 'Hope Cards',
        subtitle: 'Greeting cards that help save lifes',
        coverImage: HYMCover,
        images: [
            HYMCover
        ]
    },
    {
        title: 'Honor Your Mom',
        subtitle: 'A tribute to moms everywhere',
        coverImage: HYMCover,
        images: [
            HYMCover
        ]
    },
    {
        title: 'Concept Map',
        subtitle: 'A tribute to moms everywhere',
        coverImage: HYMCover,
        images: [
            HYMCover
        ]
    },
    {
        title: 'Teacher Dashboard',
        subtitle: 'A tribute to moms everywhere',
        coverImage: HYMCover,
        images: [
            HYMCover
        ]
    },
];


function projects(state=initialState, action) {
    switch (action.type) {
    default:
        return state;
    }
}

export default projects;