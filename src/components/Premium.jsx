export default function Premium() {
  return (
    <section className="bg-custom-dark mb-4 rounded-2xl border border-stone-700 py-3 px-4 flex flex-col gap-2.5">
      <h6 className="text-xl leading-6 font-extrabold text-white">
        Premium'a Abone Ol
      </h6>
      <p className="leading-5  text-white">
        Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
        geliri payı kazan.
      </p>
      <div className="self-start">
        <button className="flex items-center px-4 mt-5  space-x-4 w-[200px] h-[50px] bg-custom-mavi rounded-full  hover:bg-custom-blue">
          <span className="text-white ml-16 font-bold text-l">Abone Ol</span>
        </button>
      </div>
    </section>
  );
}
