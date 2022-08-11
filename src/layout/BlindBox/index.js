import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import blindBoxGif from "../../static/images/blindBoxAnimate.gif";
import { changeBlindBoxModalVisible } from "../BlindBox/BlindBoxSlice";
import "./index.css";

function BlindBox() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const modalVisible = useSelector((state) => state.blindBox.modalVisible);
  const movies = useSelector((state) => state.home.movies);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [jumpState, setJumpState] = useState(false);
  useEffect(() => {
    setSelectedMovie(movies[Math.round(Math.random() * 8)]);
  }, [modalVisible, movies]);
  useEffect(() => {
    if (modalVisible) {
      const timer = setTimeout(() => {
        setJumpState(true);
        clearTimeout(timer);
      }, 5000);
    }
  }, [modalVisible]);
  const closeModal = () => {
    dispatch(changeBlindBoxModalVisible(false));
    setJumpState(false);
  };
  const jumpToMovieDetail = () => {
    navigator(`/cinemas/${selectedMovie.id}`);
    closeModal();
  };
  return (
    <>
      <Modal
        title={jumpState ? "抽选成功" : "盲盒抽选中,请等待..."}
        centered
        visible={modalVisible}
        footer={null}
        onCancel={closeModal}
        className="blind-box-modal"
      >
        {selectedMovie && jumpState ? (
          <div className="blind-box-content">
            <div
              className="blind-box-content-movie"
              onClick={jumpToMovieDetail}
            >
              <p>{selectedMovie.movieName}</p>
              <img src={selectedMovie.cover} alt="电影海报" width={200} />
            </div>
          </div>
        ) : (
          <div className="blind-box-content">
            <img src={blindBoxGif} alt="盒子动画" height={400} />
          </div>
        )}
      </Modal>
    </>
  );
}

export default BlindBox;
