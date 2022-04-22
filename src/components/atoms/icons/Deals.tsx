import { DEFAULT_ICON_WIDTH_REM } from 'blac-constants';
import { FC } from 'react';

type Props = {
  sizeRem?: number;
};

export const Icon_Deals: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <svg
      width={`${sizeRem}rem`}
      height={`${sizeRem}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 42 42"
    >
      <circle cx="21" cy="21" r="21" fill="#3F68A5"></circle>
      <path
        fill="#FFCA28"
        d="M8.383 11.459c-.846.646-1.281 2.45-1.372 5.004-.09 2.553.39 3.94.558 4.36.168.42 1.429 1.045 2.848 2.143 1.04.805 9.212 6.494 10.18 6.936 1.54.7 2.52-.717 2.52-.717s.816.467 1.605 0c.964-.571.85-1.28.85-1.28s.993.228 1.499-.219c.506-.446.73-1.519.73-1.519s.669.304 1.236-.202c.567-.505.998-1.19.397-2.124-.601-.934-3.046-3.877-3.68-4.703-.635-.825-2.268-5.532-3.84-6.001-1.57-.47-3.121-.35-4.763.136-1.642.485-3.176.44-5-.078-1.822-.517-3.768-1.736-3.768-1.736z"
      ></path>
      <path
        fill="#FFCA28"
        d="M34.052 15.46c-.335-2.233-.777-3.752-1.106-4.12-.377-.416-1.023.413-2.39.899-1.367.485-3.83.669-3.83.669s-3.96-.116-5.444.383c-.558.186-6.06 2.505-6.226 3.478-.07.413.388 1.335 1.526 1.428 1.848.152 4.158-1.457 4.158-1.457.028-.046.302-.123 1.565-.123s2.73.828 2.823.982c.943 1.553 1.839 2.641 2.703 3.693.632.77 2.12 2.803 2.12 2.803s1.67-1.975 2.097-2.43c.426-.456 2.007-1.61 2.007-1.61s.349-2.259-.003-4.594zM12.122 25.625s-.603.214-1.154-.578c-.551-.791-.09-1.335.472-1.777.562-.442 1.306-.656 1.748-.32.44.333.623.911.623.911s.912-.743 1.733-.288c.82.456.768 1.286.768 1.286s.796-.483 1.633 0c.836.483.426 1.875.426 1.875s.973.03 1.154.989c.181.957-.045 1.975-1.14 2.158-1.093.182-1.733-.843-1.733-.843s-1.093.66-1.9.116c-.807-.545-.714-1.687-.714-1.687s-.986.163-1.542-.354c-.555-.517-.374-1.488-.374-1.488z"
      ></path>
      <path
        fill="#D69513"
        d="M19.763 29.124c.277-.512.345-1.102.163-1.587-.131-.354-.446-.798-1.18-1.014.006-.013.013-.025.02-.036l-.02-.011c.097-.297.12-.58.074-.92-.073-.536-.381-.937-.869-1.126a1.826 1.826 0 00-1.31.016c-.043-.465-.265-.796-.694-1.056-.857-.522-1.496-.182-1.889.045-.174-.501-.607-.748-.882-.86-.326-.13-1.124-.3-2.074.547l.485.445c.655-.558 1.145-.468 1.347-.386.521.209.503.596.5.776-.001.177-.029.365-.462.766-.535.497-.913.499-.913.499-.384.045-.726-.245-.882-.533-.055-.102-.216-.451-.003-.703.05-.057.152-.215.5-.487l-.48-.454c-.208.172-.469.463-.519.52-.32.376-.347.927-.072 1.435.227.424.685.823 1.245.877-.041.544.152 1.048.562 1.444.44.427.986.472 1.367.438.005.381.089.916.46 1.3.74.759 1.662.566 2.261.246.215.438.603.75 1.095.867.139.031.28.047.418.047.516 0 1.185 0 1.843-1.285-.204-.127-.4-.227-.572-.33-.5.994-1.165 1.019-1.541.93a.97.97 0 01-.71-.646c.546-.612.932-1.095 1.36-1.777.486.102.796.322.921.657.109.293.066.669-.102 1.005l.553.351zm-5.74-2.081c-.008.002-.706.242-1.16-.195a1.124 1.124 0 01-.349-1.05c.821-.583 1.53-1.494 1.678-1.692.052-.027.748-.578 1.415-.16.308.192.433.636.37.95-.064.312-.209.69-.808 1.33-.585.624-1.147.817-1.147.817zm4.028-.583c-.152.3-.623 1.292-1.603 2.1-.11.09-1.047.748-1.741.036-.25-.256-.288-.696-.275-.982a9.276 9.276 0 002.107-2.35c.279-.314.82-.366 1.177-.228.263.102.417.304.455.603.039.277.032.521-.12.82zM23.858 29.673c-.218 0-.43-.034-.63-.105-.513-.179-2.497-1.689-2.837-2.213a.328.328 0 01.096-.45.328.328 0 01.45.095c.236.362 2.087 1.804 2.506 1.952.377.131.86.063 1.227-.173.233-.152.524-.437.567-.938a.327.327 0 01.65.056 1.867 1.867 0 01-.861 1.431 2.165 2.165 0 01-1.168.345z"
      ></path>
      <path
        fill="#D69513"
        d="M26.237 28.194c-.447 0-.928-.14-1.508-.437-.714-.363-1.655-1.295-2.342-1.973l-.37-.363a.326.326 0 11.454-.472l.376.37c.619.613 1.555 1.538 2.179 1.855.787.401 1.19.397 1.485.34.54-.106.875-.612.873-1.324a.327.327 0 01.653 0c.002 1.027-.549 1.8-1.401 1.968a2.136 2.136 0 01-.4.036z"
      ></path>
      <path
        fill="#D69513"
        d="M28.112 26.591c-.175 0-.352-.03-.522-.095-.918-.358-2.142-1.487-3.743-3.453a.328.328 0 01.508-.413c1.505 1.85 2.673 2.946 3.473 3.256.402.157.998-.07 1.356-.514.168-.21.408-.624.118-1.066-.642-.977-1.29-1.767-1.977-2.6-.88-1.071-1.789-2.178-2.757-3.77a.327.327 0 01.558-.34c.943 1.554 1.838 2.642 2.702 3.694.699.848 1.356 1.65 2.018 2.658.374.566.316 1.253-.156 1.836-.363.447-.968.807-1.578.807z"
      ></path>
      <path
        fill="#D69513"
        d="M28.68 19.508c-.013 0-.024 0-.038-.002-2.399-.28-3.603-1.209-4.398-1.823-.393-.302-.701-.542-.996-.585-.834-.127-1.66-.218-2.548.04a7.677 7.677 0 00-.601.27c-.819.388-2.055.975-2.964 1.07-.707.075-1.34-.104-1.782-.5a1.652 1.652 0 01-.562-1.22c0-.796 1.006-1.266 1.67-1.574.366-.17.862-.449 1.386-.744.916-.514 1.955-1.1 2.716-1.34 1.252-.394 4.551-.512 5.608-.524a12.849 12.849 0 005.797-1.448c.062-.032.332-.173.567-.114.33.082.41.33.41.33-1.616.963-3.824 1.86-6.765 1.89-1.297.011-4.326.15-5.415.492-.698.22-1.705.787-2.594 1.288-.535.302-1.04.587-1.43.766-.388.18-1.295.601-1.295.982 0 .268.127.535.345.735.301.272.757.392 1.276.338.798-.084 2.02-.665 2.753-1.012.37-.177.569-.27.698-.306 1.1-.322 2.14-.165 2.828-.061.46.07.848.37 1.297.714.784.606 1.857 1.433 4.076 1.692.18.02.309.183.288.363a.328.328 0 01-.326.283zM29.817 23.904l-.334-.49c.255.137.833.032 1.565-1 .465-.655 1.333-1.976 2.984-2.664 0 0 .125.626-.247.88a8.865 8.865 0 00-2.204 2.163c-.621.878-1.193 1.404-1.52 1.667 0 0-.04-.263-.244-.556zM21.561 30.353c-.814 0-1.6-.426-1.997-.642l-.17-.09.483-1.102s.117.657.616.916c.821.428 1.558.49 2.157-.304l.521.394c-.47.624-1.047.828-1.61.828zM10.78 23.75a14.717 14.717 0 00-2.678-2.19c-.05-.032-.324-.209-.458-.447-.209-.37-.159-.684-.159-.684 1.435.798 2.75 1.798 3.769 2.872l-.474.45z"
      ></path>
      <path
        fill="#D69513"
        d="M15.07 13.953c-2.69 0-5.172-1.03-6.957-2.227 0 0 .093-.188.27-.267.247-.111.438-.05.465-.034 1.657 1.03 3.854 1.873 6.22 1.873h.015c.678 0 1.59-.273 2.134-.434l.272-.079c1.338-.379 2.777-.374 4.814.011l-.123.642c-1.93-.365-3.28-.372-4.514-.025-.075.02-.163.048-.263.077-.578.173-1.547.46-2.317.46-.005.003-.012.003-.016.003zM27.105 20.401s-.181-.478.122-.748c.356-.317.756-.204 1.032-.2 0 0-.537-.14-1.222-.414-.85-.343-1.435-.767-1.435-.767s.152.304.623 1.018c.47.715.88 1.111.88 1.111z"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M28.714 20.736a.4.4 0 01.305-.477l1.213-.267a.4.4 0 01.477.304l.331 1.502c.795.12 1.508.576 1.951 1.247l1.502-.331a.4.4 0 01.477.305l.267 1.213a.4.4 0 01-.304.477l-1.502.331a2.856 2.856 0 01-1.247 1.951l.331 1.502a.4.4 0 01-.304.477l-1.214.267a.4.4 0 01-.477-.304l-.331-1.502a2.856 2.856 0 01-1.951-1.247l-1.502.331a.4.4 0 01-.477-.305l-.267-1.213a.4.4 0 01.304-.477l1.502-.331a2.856 2.856 0 011.247-1.951l-.331-1.502z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};