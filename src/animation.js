export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const titleAnimation = {
    hidden: { y: 200 },
    show: { y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};

export const fade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.75, ease: 'easeOut' },
    },
};

export const photoAnim = {
    hidden: { scale: 1.5, opacity: 0, transition: { duration: 0.75 } },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeOut',
            type: 'spring',
        },
    },
};

export const pathAnim = {
    hidden: { pathLength: 0, pathOffset: 1 },
    show: {
        pathLength: 1,
        pathOffset: 0,
        transition: { duration: 1 },
        when: 'beforeParent',
    },
};

export const lineAnim = {
    hidden: { width: '0%' },
    show: { width: '100%', transition: { duration: 1 } },
};

export const slider = {
    hidden: { x: '-130%', skew: '45deg' },
    show: {
        x: '100%',
        skew: '0deg',
        transition: { duration: 1, ease: 'easeOut' },
    },
};

export const sliderContainer = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: { ease: 'easeOut', staggerChildren: 0.15 },
    },
};

export const scrollReveal = {
    hidden: { opacity: 0, scale: 1.1, transition: { duration: 0.5 } },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
