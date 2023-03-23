import styles from "../css/NewWorks.module.css";
import React, { useState } from "react";
import { addNewWork } from "../api/firebase";
import { uploadImage } from "../api/uploader";

export default function NewWorks() {
  const [work, setWork] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  //   const { addWork } = useWorks();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      console.log(files[0]);
      return;
    }
    setWork((work) => ({ ...work, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // 제품의 사진을 클라우디너리에 업로드하고 URL을 획득
    // Firebase에 새로운 제품을 추가함
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addNewWork(work, url) //
          .then(() => {
            setSuccess("성공적으로 프로젝트가 추가되었습니다.");
            setTimeout(() => {
              setSuccess(null);
            }, 4000);
          });
      })
      .finally(() => setIsUploading(false));
  };
  return (
    <section id={styles.new} className={styles.section}>
      <h2 className={styles.title}>Add New Projects</h2>
      <div className={styles.divide}></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="type"
          value={work.type ?? ""}
          placeholder="data type: front-end, back-end, mobile"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={work.category ?? ""}
          placeholder="카테고리 (FE, BE, UIUX)"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={work.title ?? ""}
          placeholder="프로젝트 명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="period"
          value={work.period ?? ""}
          placeholder="개발 기간(week, month)"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="urlDemo"
          value={work.urlDemo ?? ""}
          placeholder="데모 링크"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="urlGithub"
          value={work.urlGithub ?? ""}
          placeholder="깃허브 링크"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={work.description ?? ""}
          placeholder="프로젝트 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="team"
          value={work.team ?? ""}
          placeholder="개인 or 팀"
          required
          onChange={handleChange}
          checked
        />
        <input
          type="text"
          name="role"
          value={work.role ?? ""}
          placeholder="맡은 역할"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="stack"
          value={work.stack ?? ""}
          placeholder="사용 스택"
          required
          onChange={handleChange}
        />
        <input
          type="textarea"
          name="review"
          value={work.review ?? ""}
          placeholder="배운 & 고민한 내용"
          required
          onChange={handleChange}
        />
        <div className={styles.cont}>
          <h3 className={styles.title}>Check attached resources</h3>
          <div className={styles.divide}></div>
        </div>
        <input
          type="file"
          accept="image/*"
          name="file"
          multiple
          onChange={handleChange}
        />
        {file && (
          <img
            className={styles.img}
            src={URL.createObjectURL(file)}
            alt="local file"
          />
        )}

        <button
          className={styles.button}
          onClick={handleSubmit}
          text={isUploading ? "업로드중..." : "프로젝트 업로드하기"}
          disabled={isUploading}
        >
          제품 등록하기
        </button>
        {success && <p className={styles.messege}>✅ {success}</p>}
      </form>
    </section>
  );
}
