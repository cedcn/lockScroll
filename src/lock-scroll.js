import $ from 'jquery';

const lockScroll = (selector) => {
  const target = $(selector).get(0);
  const $target = $(selector);

  $target.on('wheel', e => {
    const mt = $target.scrollTop();
    const deltaY = e.originalEvent.deltaY;
    const isTop = mt === 0;
    const isEnd = target.scrollHeight - mt === target.clientHeight;
    if ((deltaY < 0 && isTop) || (deltaY > 0 && isEnd)) e.preventDefault();
  });
};

export default lockScroll;
