// likeComment.js
const socket = io();
function LikeButton({ pollId }) {
  return React.createElement('button', { onClick: () => socket.emit('like', pollId) }, 'Like');
}
function CommentSection({ pollId, comments }) {
  return React.createElement('div', null, '/* Comments UI */');
}
window.LikeButton = LikeButton;
window.CommentSection = CommentSection;