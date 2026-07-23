function Contact() {
  return (
    <div
      id="contact"
      className="flex w-full h-fit bg-white justify-center text-[#F5F0EC]"
    >
      <div className="flex my-[60px] w-[1040px] py-[120px] px-[110px] bg-[#1B5B31]">
        <div>
          <h2 className="text-white text-5xl font-medium">
            Zostańmy w kontakcie! <br />
            Znajdziesz nas na <span className="font-bold">Instagramie</span>.
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-6">
          <p>Śledź nasze najnowsze realizacje!</p>
          <button
            className="rounded-[200px] bg-[#F5F0EC] px-5.5 pt-3 pb-3.5 mr-8 text-[#1B5B31] duration-500 hover:scale-105
            transition-transform hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]"
          >
            <a target="_blank" href="https://www.example.com/contact">
              Instagram
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
