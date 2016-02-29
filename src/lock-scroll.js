const lockScroll = (selector) => {
  const target = document.querySelector(selector);

  target.addEventListener('wheel', e => {
    const mt = target.scrollTop;
    const deltaY = e.deltaY;
    const isTop = mt === 0;
    const isEnd = target.scrollHeight - mt === target.clientHeight;
    if ((deltaY < 0 && isTop) || (deltaY > 0 && isEnd)) e.preventDefault();
  });

};

export default lockScroll;
