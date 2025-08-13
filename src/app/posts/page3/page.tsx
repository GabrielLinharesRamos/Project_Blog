import { posts } from '@/app/data/posts';
import InstallInstructions from '@/components/Cmd';
import { FadeUpOnScroll } from '@/components/FadeUpOnScroll';
import { div } from '@tensorflow/tfjs';
import { Binary,LaptopMinimal,PcCase } from "lucide-react";

export default function Page2() {
  const post = posts.find((p) => p.href === 'page3');

  if (!post) return <div className="mx-125 flex flex-col items-center justify-center">Post não encontrado</div>;

  return (
    <div>
      <div className="bg-gray-100">
        <div className="mx-125 flex flex-col items-center justify-center">
          <h1 className="my-17 text-3xl font-bold text-black">{post.title}</h1>
          <p className="mb-17 text-xl text-gray-800 text-center">{post.content}</p>
        </div>
      </div>

      <div className="mx-150">

        <FadeUpOnScroll>
          <p className="my-10">
            To use Django and Next.js together in a project, the first step is to install and configure both frameworks separately, ensuring that each performs its own specific function.
            Django will be responsible for the backend, handling business logic, data persistence, and API provisioning, while Next.js will be responsible for the frontend, offering a fast,
            interactive, and SEO-optimized interface.
          </p>
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <p className="text-2xl font-bold mt-10 mb-5 text-3xl">Django</p>
          <hr className="mb-5" />
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <p className="my-10">
            Well, to install Django we will need three things:
          </p>
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
            <li>
              <strong>Python</strong> – Programming language that will be used for backend development.
            </li>
            <li>
              <strong>Virtual Environment</strong> – Isolated environment where the project libraries will be installed.
            </li>
            <li>
              <strong>Django</strong> – Python-based backend framework that we will use to build the application.
            </li>
          </ul>



          <br />

          <div className="my-10 flex items-center gap-2 text-2xl">
            <Binary className="mt-2"/>
            <span>Python</span>
          </div>
          <p className="my-10">
            To install Python, first download the latest version from the official 
            <a href="https://www.python.org/downloads/"> Python website</a>. 
            Run the installer, and during the installation process, make sure to check 
            the option **"Add Python to PATH"** before completing the setup.
          </p>

          <p className="my-10">
            if you you aren't sure if Python is installed, you can check by running the following command in your terminal:
          </p>

          <InstallInstructions code={
            `python --version`
            }/>

          <div className="my-10 flex items-center gap-2 text-2xl">
            <LaptopMinimal className="mt-2"/>
            <span>Virtual Enviromnent</span>
          </div>

          <p className="my-10">
            In the folder where you want to create your project, run the command above in the terminal to create a virtual environment:
          </p>

          <InstallInstructions code={
            `python -m venv your_venv_name_env`
            }/>

          <p className="my-10">
            For activate you venv. Go to the folder where created your venv and run the command above in the terminal to activate your virtual environment:
          </p>

          <InstallInstructions code={
            `venv\\Scripts\\activate`
            }/>


          <br />

          <div className="my-10 flex items-center gap-2 text-2xl">
            <PcCase className="mt-2"/>
            <span>Django Framework</span>
          </div>

          <p className="my-10">
            With the venv active, you can now install Django using pip, Python's package manager. Run the following command in the terminal:
          </p>

          <InstallInstructions code={
            `pip install django`
            }/>

          <p className="my-10">
            then you can create a new django project by running:
          </p>

          <InstallInstructions code={
            `django-admin startproject nome_do_projeto`
          }/>
          </FadeUpOnScroll>

        <FadeUpOnScroll>
          <p className="text-2xl font-bold mt-10 mb-5 text-3xl">Next.js</p>
          <hr className="mb-5" />
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <p className="my-10">
            Django and Next.js complement each other perfectly: while Django offers a solid, secure, and scalable backend, Next.js delivers fast, responsive, and SEO-optimized interfaces.
            This partnership is ideal for projects that require high performance and easy long-term maintenance.
          </p>
        </FadeUpOnScroll>
      </div>
    </div>
  );
}