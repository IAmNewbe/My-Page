const Contact = () => {
  return (
    <section id="contact" className="pt-16 pb-22 mb-12">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-tersier-0 mb-2 uppercase md:text-2xl">Contact</h4>
            <h2 className="font-bold text-3xl text-primary-0 mb-4">Stay in Touch</h2>
            <p className="font-medium text-md text-secondary-0">
                If you have any message, question or project you want to share, feel free to share it with me. I'm here to assist you!</p>
          </div>
        </div>
        <form name="submit-to-google-sheet">
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label for="name" className="text-base text-tersier-0 font-bold ">Name</label>
              <input id="name" name="nama" required type="text" placeholder="enter your name..."
              className="w-full p-3 bg-slate-200 text-primary-0 rounded-md focus:outline-none focus:ring-tersier-0 focus:ring-2 focus:border-tersier-0" />
                
            </div>
            <div className="w-full px-4 mb-8">
              <label for="email" className="text-base text-tersier-0 font-bold after:content-['*']
              after:text-pink-600 after:ml-0.5">Email</label>
              <input id="email" name="email" required type="email" placeholder="enter your email..."
              className="w-full p-3 bg-slate-200 text-primary-0 rounded-md focus:outline-none focus:ring-tersier-0 focus:ring-2 focus:border-tersier-0" />
              
            </div>
            <div className="w-full px-4 mb-8">
              <label for="message" className="text-base text-tersier-0 font-bold ">Message</label>
              <textarea id="message" name="pesan" required type="text" placeholder="enter message"
              className="w-full p-3 h-32 bg-slate-200 text-primary-0 rounded-md focus:outline-none focus:ring-tersier-0 focus:ring-2 focus:border-tersier-0" />
          </div>
          <div className="w-full px-4">
            <button type="submit" className="btn-send text-base text-white font-semibold bg-tersier-0 py-3 px-8 rounded-full w-full hover:bg-opacity-50 hover:shadow-lg ">Send</button>
          </div>
        </div>
      </form>
      </div>
    </section>
  )
}

export default Contact;