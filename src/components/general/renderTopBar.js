export function renderTopBar(option="blank", titleText="같이해요") {
  const directionIcon = "/src/assets/icons/general/direction.svg";
  const shareIcon = "/src/assets/icons/general/share.svg";
  const moreIcon = "/src/assets/icons/general/more.svg";
  const homeIcon = "/src/assets/icons/general/more.svg";

  const blank = /* html */ `
    <div class="page-controller">
      <a href="/">
        <img src=${directionIcon} alt="뒤로가기" />
      </a>
    </div>
  `;
  const withTitle = /* html */ `
    <div class="page-controller">
      <a href="/">
        <img src=${directionIcon} alt="뒤로가기" />
      </a>
      <h3 class="label-s">${titleText}</h3>
    </div>
  `;
  const withShare = /* html */ `
    <div class="page-controller">
      <a href="/">
        <img src=${directionIcon} alt="뒤로가기" />
      </a>
      <div>
        <a href="/">
          <img src=${shareIcon} alt="공유하기" />
        </a>
        <a href="/">
          <img src=${moreIcon} alt="더 보기" />
        </a>
      </div>
    </div>
  `;
  const withHome = /* html */ `
    <div class="page-controller">
      <div>
        <a href="/">
          <img src=${directionIcon} alt="뒤로가기" />
        </a>
        <a href="/">
          <img src=${homeIcon} alt="홈페이지" />
        </a>
      </div>

      <div>
        <a href="/">
          <img src=${shareIcon} alt="공유하기" />
        </a>
        <a href="/">
          <img src=${moreIcon} alt="더 보기" />
        </a>
      </div>

    </div>
  
  `;

  if(option === "blank") {
    return blank;
  } else if(option === "withTitle") {
    return withTitle;
  } else if(option === "withShare") {
    return withShare;
  } else if(option === "withHome") {
    return withHome;
  }
}

