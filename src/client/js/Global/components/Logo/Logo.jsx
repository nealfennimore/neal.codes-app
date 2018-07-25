import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import WithInverse from 'client/js/Global/hoc/WithInverse';
import styles from './Logo.pcss';

const Logo = ( {
    className
} ) =>{
    return (
        <svg className={classnames( styles.logo, className )} viewBox="0 -47 416 141" xmlns="http://www.w3.org/2000/svg" aria-labelledby="logoTitle">
            <title id="logoTitle">Neal.codes</title>
            <path d="M316.187 36.625c.275.197.767.452 1.475.767.708.315 1.583.64 2.626.973 1.042.335 2.232.62 3.57.856 1.336.237 2.792.355 4.365.355 2.045 0 3.717-.265 5.015-.797 1.298-.53 1.947-1.445 1.947-2.743 0-1.1-.413-1.937-1.24-2.507-.825-.57-2.3-.974-4.424-1.21l-4.6-.53c-1.574-.158-3.02-.443-4.338-.857-1.317-.412-2.448-.972-3.392-1.68a7.496 7.496 0 0 1-2.212-2.625c-.532-1.043-.797-2.292-.797-3.747 0-1.26.247-2.448.738-3.57.492-1.12 1.27-2.114 2.33-2.98 1.063-.864 2.45-1.543 4.16-2.034 1.712-.492 3.786-.738 6.225-.738 4.09 0 7.267.452 9.53 1.357 2.26.905 3.39 2.085 3.39 3.54 0 .472-.087.885-.264 1.24-.18.353-.375.668-.59.943-.218.275-.444.5-.68.678-.236.178-.413.286-.53.325-.158-.158-.502-.404-1.034-.74-.53-.333-1.248-.667-2.153-1.002-.905-.334-1.986-.63-3.245-.884-1.26-.256-2.714-.384-4.366-.384-4.563 0-6.844 1.2-6.844 3.6 0 1.022.433 1.798 1.298 2.33.865.53 2.104.894 3.717 1.09l6.018.768c3.266.433 5.803 1.327 7.612 2.684 1.81 1.358 2.714 3.354 2.714 5.99 0 2.95-1.17 5.31-3.51 7.08-2.34 1.77-5.714 2.654-10.12 2.654-2.123 0-4.05-.157-5.78-.472-1.732-.315-3.236-.678-4.514-1.09-1.28-.415-2.31-.818-3.098-1.21-.787-.394-1.298-.69-1.534-.886l2.537-4.543zM309.284 41.817c-.315.197-.806.472-1.475.826-.67.354-1.505.688-2.51 1.003-1.002.315-2.162.59-3.48.826-1.317.236-2.763.354-4.336.354-2.203 0-4.258-.334-6.166-1.003-1.907-.67-3.58-1.662-5.014-2.98-1.436-1.317-2.567-2.93-3.393-4.838-.825-1.907-1.238-4.1-1.238-6.578 0-2.36.403-4.513 1.21-6.46.806-1.948 1.927-3.62 3.363-5.015 1.435-1.397 3.126-2.478 5.073-3.246 1.948-.767 4.08-1.15 6.402-1.15 2.045 0 3.855.265 5.428.796 1.573.532 2.9 1.24 3.982 2.125 1.082.885 1.898 1.917 2.45 3.097a8.82 8.82 0 0 1 .825 3.776c0 1.377-.256 2.625-.767 3.746-.51 1.122-1.416 2.085-2.714 2.892-1.298.806-3.048 1.435-5.25 1.887-2.204.453-4.996.68-8.38.68-.786 0-1.523-.01-2.212-.03-.688-.02-1.425-.05-2.212-.09.315 2.007 1.288 3.63 2.92 4.868 1.633 1.24 3.963 1.86 6.992 1.86 1.023 0 1.967-.08 2.832-.237a16.08 16.08 0 0 0 2.33-.59 16.513 16.513 0 0 0 1.77-.708c.492-.236.856-.413 1.092-.53l2.478 4.72zm-20.71-13.983c.906.04 1.77.06 2.597.06h2.48c2.162 0 3.913-.14 5.25-.414 1.337-.275 2.38-.63 3.127-1.062.747-.433 1.24-.924 1.475-1.475a4.3 4.3 0 0 0 .354-1.71c0-1.496-.6-2.617-1.8-3.364-1.2-.748-2.684-1.122-4.454-1.122-1.455 0-2.734.256-3.835.767-1.1.51-2.026 1.19-2.773 2.035a9.293 9.293 0 0 0-1.74 2.92 10.559 10.559 0 0 0-.68 3.364zM270.05 3.644c0-1.062.304-1.85.913-2.36.61-.51 1.485-.767 2.626-.767.707 0 1.356.088 1.946.265.59.178.983.305 1.18.384v26.61c0 2.87-.403 5.368-1.21 7.492-.806 2.124-1.917 3.894-3.333 5.31a13.66 13.66 0 0 1-5.015 3.186c-1.927.708-4.032 1.062-6.313 1.062-2.32 0-4.454-.393-6.402-1.18-1.947-.787-3.628-1.868-5.044-3.245-1.417-1.376-2.528-3.028-3.335-4.955-.806-1.927-1.21-4.012-1.21-6.254 0-2.28.384-4.375 1.15-6.283.77-1.907 1.83-3.56 3.188-4.956a14.302 14.302 0 0 1 4.778-3.243c1.83-.768 3.827-1.15 5.99-1.15 2.28 0 4.287.44 6.018 1.326 1.73.886 3.088 1.957 4.07 3.216V3.643zm0 25.547c0-1.336-.227-2.595-.68-3.775-.452-1.18-1.07-2.203-1.858-3.068a8.342 8.342 0 0 0-2.86-2.036c-1.123-.49-2.352-.736-3.69-.736-1.376 0-2.615.246-3.716.737a8.95 8.95 0 0 0-2.86 2.008c-.808.845-1.427 1.858-1.86 3.038-.433 1.18-.65 2.458-.65 3.835 0 1.378.217 2.646.65 3.806a8.716 8.716 0 0 0 1.858 3.01 8.95 8.95 0 0 0 2.862 2.005c1.1.493 2.34.74 3.717.74 1.337 0 2.566-.237 3.688-.71a8.359 8.359 0 0 0 2.862-1.946c.787-.826 1.406-1.83 1.858-3.01.453-1.18.68-2.477.68-3.893zM224.147 13.556c2.28 0 4.415.393 6.4 1.18 1.988.787 3.71 1.878 5.164 3.274a15.107 15.107 0 0 1 3.423 4.956c.826 1.908 1.24 3.983 1.24 6.225 0 2.204-.414 4.26-1.24 6.166a15.107 15.107 0 0 1-3.422 4.956c-1.454 1.397-3.175 2.498-5.162 3.305-1.986.806-4.12 1.21-6.4 1.21-2.282 0-4.416-.404-6.403-1.21-1.986-.807-3.707-1.908-5.162-3.304a15.107 15.107 0 0 1-3.422-4.957c-.825-1.907-1.238-3.962-1.238-6.165 0-2.24.413-4.316 1.24-6.224a15.107 15.107 0 0 1 3.42-4.956c1.456-1.396 3.177-2.487 5.163-3.274 1.987-.787 4.12-1.18 6.402-1.18zm0 25.31c1.337 0 2.576-.245 3.717-.736a8.39 8.39 0 0 0 2.92-2.066 9.786 9.786 0 0 0 1.89-3.068c.45-1.16.677-2.428.677-3.805 0-1.376-.225-2.664-.677-3.864-.453-1.2-1.082-2.232-1.888-3.097a8.58 8.58 0 0 0-2.92-2.037c-1.142-.49-2.38-.737-3.718-.737-1.377 0-2.625.246-3.746.738a8.653 8.653 0 0 0-2.89 2.035c-.807.864-1.436 1.897-1.888 3.096-.453 1.2-.68 2.488-.68 3.865 0 1.378.227 2.646.68 3.806a9.786 9.786 0 0 0 1.887 3.07 8.46 8.46 0 0 0 2.89 2.063c1.122.49 2.37.737 3.747.737zM205.62 41.876c-.47.315-1.05.64-1.74.974a19.63 19.63 0 0 1-2.36.944 21.1 21.1 0 0 1-3.008.737c-1.122.198-2.39.296-3.806.296-2.203 0-4.268-.334-6.195-1.003-1.926-.67-3.618-1.662-5.073-2.98-1.455-1.317-2.606-2.94-3.452-4.867-.845-1.927-1.268-4.15-1.268-6.667 0-2.518.413-4.76 1.24-6.727.825-1.967 1.966-3.62 3.42-4.956 1.456-1.337 3.177-2.35 5.163-3.038 1.987-.69 4.12-1.034 6.402-1.034 1.927 0 3.57.157 4.927.472 1.356.315 2.457.708 3.303 1.18.845.472 1.455 1.003 1.828 1.593.375.59.562 1.18.562 1.77 0 .788-.265 1.515-.797 2.184-.53.67-1.032 1.18-1.504 1.534-.707-.67-1.73-1.308-3.067-1.918-1.337-.61-2.99-.914-4.956-.914-1.337 0-2.586.197-3.746.59a8.037 8.037 0 0 0-3.008 1.8c-.846.806-1.515 1.81-2.006 3.01-.492 1.198-.738 2.624-.738 4.276 0 1.73.256 3.206.767 4.425.51 1.22 1.22 2.222 2.124 3.01a8.72 8.72 0 0 0 3.126 1.74c1.18.373 2.458.56 3.835.56 1.968 0 3.55-.265 4.75-.796 1.2-.53 2.016-.934 2.45-1.21l2.83 5.016zM163.082 40.283c0-.63.118-1.22.354-1.77s.56-1.032.974-1.445a4.485 4.485 0 0 1 1.475-.974 4.66 4.66 0 0 1 1.8-.354c1.258 0 2.33.442 3.214 1.328.885.885 1.327 1.956 1.327 3.215 0 .63-.118 1.23-.354 1.8a4.485 4.485 0 0 1-.974 1.474 5.005 5.005 0 0 1-1.446 1.003c-.55.256-1.14.384-1.77.384-1.26 0-2.34-.462-3.245-1.387-.906-.924-1.358-2.015-1.358-3.274zM148.273 3.644c0-1.062.315-1.85.944-2.36.63-.51 1.514-.767 2.655-.767.708 0 1.357.088 1.947.265.59.178.982.305 1.18.384V44h-6.727V3.644zM141.075 43.882c-.393.08-1.013.167-1.858.266-.846.098-1.84.196-2.98.294-1.14.1-2.42.187-3.835.266-1.416.08-2.89.118-4.425.118-3.068 0-5.575-.265-7.523-.797-1.947-.532-3.48-1.24-4.6-2.124-1.123-.886-1.89-1.908-2.302-3.07a10.57 10.57 0 0 1-.62-3.568c0-1.613.246-3.03.737-4.248.49-1.22 1.297-2.242 2.418-3.068 1.122-.826 2.587-1.445 4.396-1.86 1.81-.412 4.012-.618 6.608-.618 1.495 0 2.91.05 4.248.148a75.5 75.5 0 0 1 3.01.265c0-1.377-.227-2.517-.68-3.422-.452-.905-1.07-1.613-1.858-2.124-.787-.51-1.73-.864-2.832-1.06-1.1-.198-2.32-.296-3.658-.296-2.242 0-4.04.256-5.398.767-1.358.512-2.252.945-2.685 1.3-.237-.198-.56-.57-.974-1.122-.414-.55-.62-1.22-.62-2.006 0-.55.147-1.09.442-1.623.296-.532.817-1.003 1.564-1.417.747-.413 1.75-.737 3.01-.973 1.258-.236 2.85-.354 4.778-.354 2.32 0 4.435.226 6.343.68 1.907.45 3.55 1.17 4.926 2.152 1.376.983 2.447 2.28 3.214 3.894.768 1.613 1.15 3.56 1.15 5.84v17.76zm-6.667-13.098c-.393-.08-1.13-.197-2.212-.354-1.082-.157-2.705-.236-4.868-.236-2.675 0-4.622.403-5.84 1.21-1.22.806-1.83 2.074-1.83 3.805 0 .707.128 1.356.383 1.946.257.59.7 1.09 1.33 1.505.628.414 1.484.728 2.566.945 1.08.216 2.428.324 4.04.324 1.81 0 3.246-.07 4.308-.208 1.062-.137 1.77-.245 2.124-.324v-8.614zM108.27 41.817c-.314.197-.805.472-1.474.826-.67.354-1.504.688-2.508 1.003-1.003.315-2.163.59-3.48.826-1.318.236-2.764.354-4.337.354-2.202 0-4.257-.334-6.165-1.003-1.907-.67-3.58-1.662-5.015-2.98-1.435-1.317-2.566-2.93-3.392-4.838-.826-1.907-1.24-4.1-1.24-6.578 0-2.36.404-4.513 1.21-6.46.807-1.948 1.928-3.62 3.364-5.015 1.435-1.397 3.126-2.478 5.073-3.246 1.948-.767 4.08-1.15 6.402-1.15 2.045 0 3.855.265 5.428.796 1.573.532 2.9 1.24 3.983 2.125 1.08.885 1.897 1.917 2.448 3.097a8.82 8.82 0 0 1 .826 3.776c0 1.377-.256 2.625-.767 3.746-.51 1.122-1.416 2.085-2.714 2.892-1.297.806-3.047 1.435-5.25 1.887-2.203.453-4.995.68-8.378.68-.787 0-1.524-.01-2.212-.03-.69-.02-1.426-.05-2.213-.09.315 2.007 1.288 3.63 2.92 4.868 1.633 1.24 3.963 1.86 6.992 1.86 1.022 0 1.966-.08 2.83-.237a16.08 16.08 0 0 0 2.332-.59 16.513 16.513 0 0 0 1.77-.708c.49-.236.855-.413 1.09-.53l2.48 4.72zM87.563 27.834c.905.04 1.77.06 2.596.06h2.478c2.163 0 3.914-.14 5.25-.414 1.338-.275 2.38-.63 3.128-1.062.747-.433 1.24-.924 1.475-1.475a4.3 4.3 0 0 0 .353-1.71c0-1.496-.6-2.617-1.8-3.364-1.2-.748-2.684-1.122-4.454-1.122-1.456 0-2.735.256-3.836.767-1.1.51-2.026 1.19-2.773 2.035a9.293 9.293 0 0 0-1.74 2.92 10.529 10.529 0 0 0-.678 3.364zM46.262 26.123c0-1.967.364-3.727 1.09-5.28a11.497 11.497 0 0 1 3.01-3.953c1.28-1.082 2.793-1.908 4.544-2.48 1.75-.57 3.667-.854 5.752-.854s4.012.285 5.782.856c1.77.57 3.294 1.396 4.573 2.478a11.183 11.183 0 0 1 2.98 3.953c.707 1.553 1.06 3.313 1.06 5.28V44H68.33V27.834c0-2.675-.65-4.71-1.947-6.107-1.297-1.396-3.205-2.094-5.722-2.094-2.557 0-4.474.698-5.752 2.095-1.28 1.396-1.918 3.43-1.918 6.106V44h-6.726V26.123z" className={styles.letter} />
            <path d="M25.022 14.736L4.55 25.18 25.2 36.742v4.484L.064 26.537v-2.833l24.957-13.157v4.19z" className={styles.startBracket} />
            <path d="M363.505 44.767l18.467-40.002 3.54 1.83-18.526 39.883-3.48-1.71z" className={styles.forwardSlash} />
            <path d="M390.707 14.736v-4.19l25.016 13.158v2.832l-25.134 14.69v-4.483l20.59-11.564-20.473-10.444z" className={styles.endBracket} />
        </svg>
    );
};

Logo.propTypes = {
    className: PropTypes.string
};

Logo.defaultProps = {
    className: ''
};

export default WithInverse( styles, Logo );
