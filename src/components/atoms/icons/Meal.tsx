import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from 'blac-constants';

type Props = {
  sizeRem?: number;
};

export const Icon_Meal: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <svg
      width={`${sizeRem}rem`}
      height={`${sizeRem}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 42 44"
    >
      <circle cx="21" cy="23" r="21" fill="#FD9C00"></circle>
      <g fill="#fff" clipPath="url(#clip0_73_163)">
        <path d="M12.117 15.997a.532.532 0 10.556-.91 1.392 1.392 0 01-.461-1.91 2.44 2.44 0 00.292-1.857 2.438 2.438 0 00-1.107-1.519.533.533 0 10-.556.91c.317.194.54.499.626.86.088.36.029.733-.165 1.05a2.459 2.459 0 00.815 3.376zM23.522 13.245a.532.532 0 10.557-.91 1.392 1.392 0 01-.461-1.91 2.44 2.44 0 00.292-1.857 2.438 2.438 0 00-1.107-1.52.533.533 0 10-.556.91c.316.194.54.5.626.86.087.36.029.734-.165 1.05a2.459 2.459 0 00.814 3.377zM17.069 11.51a.532.532 0 10.556-.91 1.391 1.391 0 01-.46-1.91 2.44 2.44 0 00.292-1.857 2.438 2.438 0 00-1.108-1.519.533.533 0 10-.556.91c.317.194.54.499.627.86.087.36.028.733-.166 1.05a2.459 2.459 0 00.815 3.376zM34.308 23.215c-2.27-5.29-7.629-8.636-13.36-8.377-.011-.085-.018-.171-.038-.254a2.67 2.67 0 00-3.217-1.967 2.67 2.67 0 00-1.967 3.218c.02.083.053.163.082.244-5.218 2.383-8.461 7.804-8.07 13.547-.935.875-1.902 2.064-1.658 3.076.636 2.637 9.106 2.467 16.617.654 7.512-1.813 15.127-5.524 14.49-8.16-.244-1.013-1.647-1.63-2.879-1.981zm-17.52-7.541a1.602 1.602 0 011.155-2.02 1.602 1.602 0 011.949 1.27l-.074.012c-.183.023-.366.053-.55.084-.067.011-.134.02-.202.033a13.893 13.893 0 00-1.484.358c-.066.02-.13.042-.195.063-.178.056-.354.114-.527.176-.025.008-.049.015-.072.024zm-.429 2.498c.776-.382 1.6-.68 2.452-.886l.008-.002a.534.534 0 01.25 1.037l-.007.001c-.775.188-1.525.459-2.23.807a.535.535 0 01-.716-.243.533.533 0 01.243-.714zm-2.803 1.972a.534.534 0 01.744.765c-2.094 2.037-3.24 5.095-3.066 8.18a.534.534 0 01-1.066.06c-.19-3.39 1.076-6.755 3.388-9.005zm8.891 12.175c-8.863 2.139-15.05 1.29-15.33.133-.048-.198.092-.695.779-1.465.005.03.013.059.018.089.051.288.108.578.177.867l.1.408h.42a57.743 57.743 0 0013.455-1.61 57.737 57.737 0 0012.709-4.704l.375-.192-.1-.408c-.069-.29-.15-.572-.237-.853l-.024-.087c.962.372 1.313.75 1.361.949.28 1.156-4.84 4.734-13.703 6.873z"></path>
      </g>
      <defs>
        <clipPath id="clip0_73_163">
          <path
            fill="#fff"
            d="M0 0H32V32H0z"
            transform="rotate(-13.567 31.553 3.753)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};