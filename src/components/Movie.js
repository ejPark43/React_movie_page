// 새로운 컴포넌트 생성
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function Movie({ coverImg, title, summary, genres, id }) {
  // Movie 컴포넌트가 괄호 안의 정보들을 parent component로부터 받아오고 있음.
  return (
    <div>
      <div>
        <img src={coverImg} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>{" "}
          {/**여기서 id를 prop으로 받아와서 써줌으로써 각 고유의 아이디를 가진 페이지 라우트로 이동할 수 있게됨 */}
        </h2>
        <p>{summary}</p>
        <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      </div>
    </div>
  );
}
Movie.propTypes = {
  // PropTypes로 고정된 타입과 require 정해줌
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  // genres: PropTypes.arrayOf(PropTypes.string).isRequired, // 장르를 필수로 안했음..
  genres: PropTypes.arrayOf(PropTypes.string),
};
export default Movie;
