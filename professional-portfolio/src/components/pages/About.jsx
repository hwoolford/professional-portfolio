import "../../styles/about.css";

export default function About() {
  return (
    <>
      <div className="body container-fluid">
        <h1 className="text-center title">About Me</h1>
        <div className="row container">
          <div className="col-md-3">
            <img
              className="portrait"
              src="./assets/photo.png"
              alt="portrait"
            />
          </div>
          <div className="col-md-9">
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              enim cum suscipit perspiciatis autem officiis commodi earum? Eum
              voluptas perspiciatis praesentium officia quibusdam fuga placeat
              deleniti dolore! Mollitia, dolorem aspernatur laudantium nihil,
              assumenda deserunt neque pariatur ut eius blanditiis numquam
              magni? Alias vero obcaecati neque voluptatem blanditiis, ex
              tenetur repellendus.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              quaerat, veritatis voluptate corrupti ratione hic cum cumque neque
              reiciendis ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
