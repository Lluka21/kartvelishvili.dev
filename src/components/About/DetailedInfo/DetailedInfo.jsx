const personalInfo = {
  name: "Luka",
  surname: "Kartvelishvili",
  aboutText: `
  Android Developer passionate about building clean, maintainable,
  and user-friendly mobile applications. Experienced in developing
  end-to-end projects with a focus on delivering high-quality solutions.
`,
};

export default function DetailedInfo() {
  return (
    <div>
      <h1 className="aboutMe_text">
        <span className="name">{personalInfo.name}</span>
        <span className="surname">{personalInfo.surname}</span>
      </h1>
      <p className="aboutMe_info">{personalInfo.aboutText}</p>
    </div>
  );
}
