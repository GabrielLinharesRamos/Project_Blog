import { getPostById } from "../../../lib/notion";
import { FadeUpOnScroll } from '../../../components/FadeUpOnScroll';
import LivePersonDetection from '../../../components/LivePersonDetection';
import InstallInstructions from '../../../components/Cmd';
import { FolderOpen } from "lucide-react";

type Props = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params }: Props) {
  const post = await getPostById(params.id);

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
            YOLO is the acronym for “You Only Look Once”. This means that it is very fast:
            instead of analyzing the image bit by bit, it looks at everything at once and
            immediately understands what is there.
          </p>
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <img
            src="/yolo.jpeg"
            alt="YOLO Example"
            width={4800}
            height={3200}
            style={{ display: "block", margin: "0 auto" }}
          />
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <p className="text-2xl font-bold mt-10 mb-5 text-3xl">Installation</p>
          <hr className="mb-5" />
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <p className="mb-10">First we need to do some installations in our project</p>
          <InstallInstructions />
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <div className="my-10 flex items-center gap-2 text-2xl">
            <FolderOpen className="mt-2" />
            <span>opencv-python</span>
          </div>
          <p className="mb-10">
            This library is used to access the device's camera, capture frames in real time, and display the detection results on screen. 
            OpenCV functions are utilized to set the capture resolution, continuously read frames, and draw rectangles around detected people.
          </p>
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <div className="my-10 flex items-center gap-2 text-2xl">
            <FolderOpen className="mt-2" />
            <span>ultralytics</span>
          </div>
          <p className="mb-10">
            The Ultralytics library handles loading the pretrained YOLO model and performing object detection inference on the captured frames. 
            It processes each camera frame to identify people (class 0) and returns bounding box coordinates that are then used to highlight the detected objects.
          </p>
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <div className="my-10 flex items-center gap-2 text-2xl">
            <FolderOpen className="mt-2" />
            <span>torch torchvision torchaudio</span>
          </div>
          <p className="mb-10">
            These libraries provide the deep learning framework for running the YOLO model.
            PyTorch (torch) handles the model inference, while torchvision and torchaudio offer utilities for image and audio processing.
          </p>
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <p className="text-2xl font-bold mt-10 mb-5 text-3xl">Example</p>
          <hr className="mb-10" />
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <LivePersonDetection />
        </FadeUpOnScroll>
      </div>
    </div>
  );
}
