import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.svg`
  aspect-ratio: 120/46;
  height: auto;
  width: auto;
  display: block;
`;

export default () => {
  return (
    <Wrapper
      width={120}
      height={46}
      viewBox="0 0 120 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M119.742 26.1674C118.953 26.1674 118.376 25.3594 117.929 23.6248C116.955 20.0143 115.376 16.7824 113.467 14.4771C115.975 12.8385 117.246 10.8892 117.246 8.67433C117.246 7.31263 116.63 6.22778 115.499 5.60061C114.469 5.10904 113.332 5.07514 112.23 5.04689H99.3422V6.40859H99.6109C99.9076 6.39164 100.12 6.46509 100.294 6.6346C100.68 7.01316 100.859 7.9172 100.859 9.47666V23.0937C100.859 24.6532 100.68 25.5572 100.294 25.9358C100.126 26.1053 99.9076 26.1731 99.6109 26.1674H99.3422V27.5291H108.512V26.1618H108.244C107.947 26.1787 107.734 26.1053 107.561 25.9358C107.174 25.5572 106.995 24.6532 106.995 23.0937V17.4265L107.605 17.1723C108.943 19.1216 111.351 23.5288 111.351 25.3255C111.351 25.9979 111.065 26.1335 110.466 26.1618L110.22 26.1731V27.5178H120V26.1561H119.742V26.1674ZM106.995 14.4545V9.87218C106.995 9.81002 106.995 9.73657 106.995 9.66312C106.995 9.22805 106.978 8.57263 107.185 8.30141C107.516 7.90025 108.277 7.75899 108.831 7.75899C110.136 7.75899 110.886 8.60088 110.886 10.0643C110.886 12.669 108.585 13.9008 106.995 14.4432V14.4545ZM65.9258 21.6811L65.7131 21.7207V22.8338H70.5948V21.6416H70.2925C69.7551 21.6472 69.4024 21.2461 69.4024 19.2854V8.58393C69.4024 6.61765 69.7607 6.21648 70.2925 6.21648L70.5948 6.22778V5.03559H65.7131V6.22778L66.0154 6.21648C66.2953 6.21648 67.0399 6.21648 67.0399 8.58393V11.0305L65.1253 8.12626L65.0245 7.985C64.7558 7.61774 64.3079 7.00186 64.3079 6.59505C64.3079 6.35774 64.4143 6.23343 64.6942 6.13173L64.8677 6.06958V5.02994H56.056V6.22213L56.3583 6.21083C56.8957 6.21083 57.2484 6.612 57.2484 8.57827V19.3024C57.2484 20.1669 57.1812 20.7658 57.0357 21.1444C56.6942 20.6528 56.4871 19.9126 56.3191 19.2911C56.2799 19.1498 56.2407 19.0142 56.2071 18.8843C54.2253 11.7933 52.8705 6.80976 52.8314 6.49334C52.8202 6.35209 52.8313 6.15433 53.1057 6.12043L53.3352 6.09218V5.02428H46.4773V6.08088L46.6956 6.12043C46.83 6.14303 46.9587 6.21083 46.9587 6.51594C46.9587 6.78151 46.774 7.43693 46.6004 7.9398L43.1966 18.8447L43.1463 18.986C43.0231 19.3532 42.8943 19.7262 42.7432 20.0821C42.7096 19.9635 42.6704 19.8392 42.6368 19.7036C41.8754 16.8784 40.6438 14.3415 39.1547 12.5221C41.1141 11.2282 42.105 9.68572 42.105 7.9398C42.105 6.84931 41.6123 5.97352 40.6998 5.465C39.8768 5.07514 38.9755 5.04689 38.1022 5.02428H27.8964V6.21083H28.1652C28.3835 6.19953 28.5402 6.25038 28.6634 6.36904C28.9545 6.6572 29.0945 7.35783 29.0945 8.56697V19.2911C29.0945 20.5059 28.9601 21.2009 28.6634 21.489C28.5402 21.6077 28.3835 21.6642 28.1652 21.6585H27.8964V22.8394H35.2302V21.6472H34.9615C34.7488 21.6585 34.5864 21.6077 34.4633 21.489C34.1721 21.2009 34.0322 20.5002 34.0322 19.2911V14.867L34.4409 14.6975C35.4989 16.2456 37.3576 19.6584 37.3576 21.054C37.3576 21.5455 37.1672 21.6359 36.7138 21.6585L36.4675 21.6698V22.8394H46.4381V21.6868L46.2141 21.6585C45.7383 21.5964 45.4416 21.4212 45.4416 20.7602C45.4416 20.3646 45.5759 19.6753 45.8446 18.7035L46.5724 16.2004C47.6193 16.1722 48.5766 16.5394 49.4892 17.3079C50.3177 17.9802 51.2134 19.2289 51.2134 20.3872C51.2134 21.1105 50.8383 21.6077 50.2617 21.6472L50.021 21.6642V22.8281H60.8034V21.6359L60.501 21.6472C59.9636 21.6472 59.6277 21.2517 59.6277 19.2798V9.20545L65.6067 17.5452C66.2393 18.4153 66.8383 19.2346 66.8383 20.4155C66.8383 21.1444 66.5528 21.5399 65.9426 21.6529L65.9258 21.6811ZM34.021 12.4317V8.90034C34.021 8.84948 34.021 8.79298 34.021 8.73648C34.021 8.40312 34.0098 7.8946 34.1554 7.70249C34.4017 7.40303 34.9839 7.29567 35.4094 7.29567C36.4171 7.29567 36.9713 7.92285 36.9713 9.05854C36.9713 11.0361 35.2526 11.9967 34.021 12.4317ZM47.373 13.4883L48.3975 9.79307L49.6067 14.3585C48.9853 13.9347 48.2127 13.5561 47.3786 13.4883H47.373ZM92.5234 7.65729C92.1763 8.0076 92.1763 8.70823 92.1819 9.77047V10.6915H92.6186C92.7194 10.6915 92.8146 10.6915 92.9153 10.6915C94.2365 10.7028 94.9867 10.6519 95.1659 9.42581L95.1994 9.1998H96.2239L96.9405 14.2002L96.0112 14.3754L95.916 14.2285C95.7873 14.0251 95.6585 13.8556 95.5185 13.703C94.8243 12.9289 94.091 12.9346 93.1672 12.9459C93.0665 12.9459 92.9713 12.9459 92.8705 12.9459H92.1875V18.3871C92.1875 20.1386 92.5682 20.5963 94.035 20.5963C96.3751 20.5963 98.133 19.0425 99.415 15.8501L99.5157 15.6015L100.512 16.0253L98.4968 23.4949L98.1833 23.2067C97.7915 22.8451 97.366 22.8507 97.1141 22.8507H97.0525H86.2421H78.9923C76.7138 22.8507 74.3457 22.6078 72.4367 20.8336C71.3674 19.8392 70.522 18.4662 69.9846 16.8615L69.9734 16.8219V9.60097L69.9902 9.55576C71.1546 6.40859 73.937 4.60617 77.6319 4.60617C79.3058 4.60617 80 4.75307 81.0749 5.00733C81.3996 5.08644 81.6963 5.15989 81.993 5.15989C82.3905 5.15989 82.6928 5.01864 83.0231 4.68527L83.4038 4.30106L84.1484 10.6463L83.1519 10.844L83.0791 10.6237C82.3345 8.38617 80.7334 7.10357 78.6956 7.10357C75.7341 7.10357 74.6816 10.392 74.6816 13.4657C74.6816 16.5394 75.9804 20.5906 78.8691 20.5906C79.3338 20.5906 79.916 20.4042 80.1512 19.8787C80.3695 19.4154 80.3695 18.6865 80.3695 18.0989V15.545V15.2907C80.3751 13.9403 80.3303 13.1041 79.289 13.0476L79.0427 13.0363V11.8667H86.5276V13.0306L86.2869 13.0476C85.1896 13.1211 85.1449 14.0081 85.1616 15.4433C85.1616 15.5732 85.1616 15.7032 85.1616 15.8332V19.0312C85.1616 19.568 85.1616 20.681 85.3352 21.0935C85.464 21.3986 85.7215 21.5286 86.0294 21.6642L86.2981 21.6698C86.5164 21.6755 86.6732 21.6246 86.7964 21.5003C87.0875 21.2122 87.2274 20.5115 87.2274 19.3024V8.57827C87.2274 7.36348 87.0931 6.6685 86.7964 6.38034C86.6732 6.26168 86.5108 6.20518 86.2981 6.21083H86.0294V5.02994H96.14C96.6774 5.02994 97.2316 5.02994 97.8194 4.56662L98.1554 4.30106L99.3702 10.6915L98.3345 11.0531L98.2673 10.7762C97.7131 8.53307 96.1735 7.29567 93.9342 7.29567C93.2232 7.29567 92.7754 7.40868 92.5402 7.65164L92.5234 7.65729ZM23.888 7.51603V19.1837C23.888 21.1218 24.2015 21.6585 25.3492 21.6811H25.6067V22.862H17.2092V21.6811H17.4668C18.6144 21.6529 18.9279 21.1161 18.9279 19.1781V7.49343C17.3996 7.64599 16.1512 8.77038 15.5521 10.5446L15.4682 10.7988L14.4661 10.4259L15.4234 5.02994H27.443L28.3443 10.4315L27.3142 10.7875L27.2246 10.5559C26.4857 8.71388 25.3996 7.71379 23.9048 7.50473L23.888 7.51603ZM40.7894 26.7889H48.2911V27.9811H48.0224C47.7929 27.9698 47.6305 28.0263 47.4961 28.1563C47.1882 28.4614 47.0371 29.1733 47.0371 30.3429V41.0727C47.0371 42.2875 47.1714 42.9825 47.4682 43.2706C47.5913 43.3893 47.7481 43.4401 47.9664 43.4401H48.2351V44.621H40.7894V43.4458H41.0413C41.7075 43.4232 42.0714 43.0164 42.0714 40.9427V33.767H38.2701V40.9427C38.2701 43.022 38.634 43.4232 39.3002 43.4401H39.5521V44.621H32.112V43.4627H32.3807C32.5934 43.474 32.7446 43.4232 32.8677 43.3045C33.1644 43.0107 33.3044 42.3044 33.3044 41.0727V30.3429C33.3044 28.258 32.8341 27.9811 32.3695 27.9755H32.112V26.7946H39.5521V27.9698L39.3002 27.9811C38.662 28.0037 38.2701 28.4106 38.2701 30.3486V31.5069H42.0714V30.3486C42.0714 29.1959 41.9146 28.484 41.6011 28.1732C41.4612 28.0376 41.2932 27.9755 41.0581 27.9811H40.7894V26.8002V26.7889ZM48.6886 26.7889H56.0448V27.9811H55.7761C55.5577 27.9698 55.401 28.0207 55.2778 28.1393C54.9867 28.4275 54.8467 29.1281 54.8467 30.3373V41.067C54.8467 42.2818 54.9811 42.9768 55.2778 43.265C55.401 43.3836 55.5577 43.4345 55.7761 43.4345H56.0448V44.6154H48.6886V43.4232H48.9573C49.1756 43.4345 49.3324 43.3836 49.4556 43.265C49.7467 42.9768 49.8866 42.2762 49.8866 41.067V30.3373C49.8866 28.4105 49.5619 28.0263 48.9293 27.9698L48.6942 27.9472V26.7889H48.6886ZM86.4381 43.4401L86.6228 43.5249V44.6154H79.373C77.0945 44.6154 74.7264 44.3724 72.8174 42.5983C71.7481 41.6038 70.9027 40.2308 70.3597 38.6262L70.3485 38.5866V31.3656L70.3653 31.3204C71.5297 28.1732 74.3121 26.3708 78.007 26.3708C79.6809 26.3708 80.3751 26.5177 81.45 26.772C81.5227 26.7889 81.5899 26.8059 81.6515 26.8228C81.8642 26.8793 82.0154 26.9189 82.2337 26.9189C82.6312 26.9189 82.8551 26.8454 83.4206 26.4217L83.7789 26.1505L84.5178 32.2018L83.4933 32.4053L83.4206 32.1849C82.704 30.0435 81.1588 28.8626 79.0651 28.8626C76.1036 28.8626 75.0511 32.151 75.0511 35.2247C75.0511 38.2984 76.3499 42.3496 79.2386 42.3496C79.7033 42.3496 80.2855 42.1632 80.5206 41.6377C80.739 41.1744 80.739 40.4455 80.739 39.8579V37.0441C80.7446 35.6937 80.6998 34.8631 79.6585 34.8009L79.4122 34.7897V33.6201H86.8971V34.784L86.6564 34.8009C85.5591 34.8744 85.5143 35.7615 85.5311 37.1966C85.5311 37.3266 85.5311 37.4566 85.5311 37.5865V40.7789C85.5311 41.3157 85.5311 42.4287 85.7047 42.8412C85.8334 43.1576 86.1134 43.2819 86.4325 43.4288L86.4381 43.4401ZM70.6788 43.4062H70.9811V44.5871H66.0994V43.474L66.3121 43.4345C66.9223 43.3215 67.2078 42.926 67.2078 42.1971C67.2078 41.0162 66.6088 40.1969 65.9762 39.3268L59.9972 30.9871V41.0614C59.9972 43.0333 60.3331 43.4288 60.8705 43.4288H61.1728V44.6097H56.4423V43.4175H56.7446C57.282 43.4232 57.6347 43.022 57.6347 41.0614V30.3316C57.6347 28.3653 57.2764 27.9642 56.739 27.9642H56.4367V26.7833H65.2484V27.8907L65.0749 27.9529C64.7894 28.0489 64.6886 28.1732 64.6886 28.4162C64.6886 28.823 65.1365 29.4389 65.4052 29.8062L65.5059 29.9474L67.4206 32.7951V30.3373C67.4206 27.9698 66.676 27.9698 66.3961 27.9698H66.0938V26.7889H70.9755V27.9811H70.6732C70.1358 27.9755 69.7831 28.3766 69.7831 30.3373V41.0388C69.7831 43.0051 70.1414 43.4062 70.6732 43.4062H70.6788ZM32.543 32.1679L31.4961 32.507L31.4066 32.2866C30.634 30.4107 29.5311 29.4332 27.9524 29.2298V40.9258C27.9524 42.8695 28.2771 43.4119 29.4696 43.4345H29.7215V44.6097H21.0777V43.4401H21.3296C22.522 43.4119 22.8467 42.8751 22.8467 40.9314V29.2242C21.2512 29.3711 19.9972 30.4729 19.3646 32.2866L19.2806 32.5296L18.2393 32.1679L19.2246 26.7663H31.6025L32.5318 32.1736L32.543 32.1679ZM100.372 38.4058C100.372 42.6774 97.7299 45.0335 92.9265 45.0335C91.7621 45.0335 90.8719 44.8583 89.8307 44.6323L89.7859 44.621C89.4052 44.525 88.823 44.3781 88.4535 44.3781C88.084 44.3781 87.7985 44.5363 87.4794 44.9148L87.0651 45.4177L86.5948 38.2193H87.7201L87.7761 38.4058C88.4814 40.8354 90.2729 42.4061 92.3387 42.4061C94.2981 42.4061 95.2498 41.6434 95.2498 40.067C95.2498 38.9313 94.2869 38.5583 93.4416 38.2306C93.352 38.1967 93.2624 38.1628 93.1784 38.1289L90.9895 37.2588C90.1554 36.9424 89.1029 36.4847 88.3863 35.7841C87.5465 34.9648 87.0259 33.6766 87.0259 32.4109C87.0259 30.2412 87.7425 28.6027 89.1588 27.5348C90.5584 26.4782 92.1428 26.3652 92.7586 26.3652C94.4381 26.3652 95.5857 26.6477 96.2743 26.8172C96.4871 26.868 96.655 26.9132 96.7558 26.9189C97.1365 26.9584 97.5731 26.8285 97.9482 26.5629L98.3121 26.3087L98.8271 31.5182L97.937 31.8798L97.8251 31.6764C97.0245 30.196 95.3562 28.9925 94.1022 28.9925C93.5647 28.9925 92.8313 29.162 92.3779 29.6423C92.0924 29.9474 91.958 30.3316 91.9748 30.7949C91.9748 31.8289 93.0609 32.2075 93.8558 32.4844C93.9286 32.507 93.9958 32.5352 94.0574 32.5578L96.599 33.4788C98.8551 34.2924 100.372 36.27 100.372 38.4058ZM117.442 2.7416H0V0.865723H117.442V2.7416ZM0.20154 29.5858H17.853V31.4617H0.20154V29.5858ZM99.3926 29.5858H119.961V31.4617H99.3926V29.5858ZM10.5528 21.3308C10.5528 19.8392 9.30441 19.3589 8.20714 18.9295C8.09517 18.8843 7.9832 18.8447 7.87684 18.7995L5.09447 17.6977C4.03639 17.2909 2.70959 16.7146 1.80826 15.8388C0.755773 14.8105 0.10077 13.1889 0.10077 11.6068C0.10077 8.87209 1.0021 6.80976 2.78237 5.465C4.54024 4.1372 6.53884 3.9903 7.31141 3.9903C7.84885 3.9903 8.47586 3.99029 9.09727 4.0355C9.61791 4.0694 10.1833 4.14285 10.8775 4.26151L11.1407 4.30671C11.6445 4.39146 12.1707 4.48186 12.6746 4.60052C13.5199 4.80393 14.3205 4.67397 14.7516 4.49881L15.1938 4.31801L14.0126 10.6858L13.8502 10.7254C13.8502 10.7254 13.7271 10.7706 13.6207 10.8045C13.408 10.8779 13.3632 10.8949 13.3352 10.9005L13.1001 10.957L13.0273 10.7197C12.4227 8.73648 10.6648 7.18267 9.03009 7.18267C8.3359 7.18267 7.37859 7.40303 6.78516 8.0302C6.40448 8.43137 6.23093 8.93989 6.25332 9.54446C6.25332 10.9062 7.6641 11.3977 8.69419 11.7593C8.78376 11.7933 8.87334 11.8215 8.95171 11.8498L12.1763 13.0193C14.5388 13.8725 16.9293 16.1157 16.9293 19.2176C16.9293 24.6814 13.6823 27.5687 7.54094 27.5687C6.06858 27.5687 4.94332 27.3483 3.62211 27.0601L3.57733 27.0488C3.08467 26.9245 2.3345 26.7324 1.85864 26.7324C1.38279 26.7324 0.985304 26.9358 0.571029 27.4387L0.0671798 28.0489L0.582225 19.3702H1.59552L1.6571 19.551C2.73198 22.7886 4.46186 24.365 6.80756 24.365C9.3436 24.365 10.5752 23.3706 10.5752 21.3195L10.5528 21.3308Z"
        fill="#ED1B30"
      />
    </Wrapper >
  );
}