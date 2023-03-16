export default {
  core: `
    animation: glitch 1s linear infinite;
    @keyframes glitch{
      2%, 64%{
        transform: translate(2px,0) skew(0deg);
      }
      4%, 60%{
        transform: translate(-2px,0) skew(0deg);
      }
      62%{
        transform: translate(0,0) skew(5deg); 
      }
    }
  `,

  top: `
    @keyframes glitch-top{
      2%, 64%{
        transform: translate(2px,-2px);
      }
      4%, 60%{
        transform: translate(-2px,2px);
      }
      62%{
        transform: translate(13px,-1px) skew(-13deg); 
      }
    }
    animation: glitch-top 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  `,

  bottom: `
    @keyframes glitch-bottom{
      2%, 64%{
        transform: translate(-2px,0);
      }
      4%, 60%{
        transform: translate(-2px,0);
      }
      62%{
        transform: translate(-22px,5px) skew(21deg); 
      }
    }
    animation: glitch-bottom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  `
}