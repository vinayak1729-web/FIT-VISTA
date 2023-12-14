# AI Workout Assistant

AI Workout Assistant is a web application designed to assist with workout sessions, analyze poses, and count repetitions. The application runs on the client side, ensuring user privacy.

## How it Works

The application uses the MoveNet model to process image data from videos or webcams, generating keypoints for repetition calculations. A Dense Neural Network (DNN) classifies workout types using these keypoints.

![How AI Workout Works](./public/img/how-it-work-ai-workout.png)

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/)
- [NPM](https://www.npmjs.com/package/npm)

### Installation

```bash
git clone https://github.com/reevald/ai-workout-assistant.git
cd ai-workout-assistant
npm install


Run Locally
npm run start-dev

Open http://localhost:8080 to access the app.

Generate Your Own Workout

Open the app locally or visit (https://aiworkout.live/).
Collect dataset (keypoints) using a webcam or uploaded video.
Generate and train a new model.
Put the model into the app.
Create a new configuration.
Run the app locally to test.


Limitations
Does not cover 3D angles yet.
High resolution may impact FPS.
TODOs
Write documentations.
Write unit tests.
Add audio effects (timer and movement direction).
Data Augmentation for pose classification model.
Convert to components (preferably using a framework like React.js)



References
- Pose Detection with TFJS (https://github.com/tensorflow/tfjs-models/tree/master/pose-detection)
- MoveNet Documentation (https://github.com/tensorflow/tfjs-models/tree/master/pose-detection/src/movenet)
- MoveNet in TFHub (https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4)
- Pose Classification (https://developers.google.com/ml-kit/vision/pose-detection/classifying-poses)
- Original video (in image above)
    -   Man push-up (https://www.youtube.com/watch?v=OKn_6Me96Yc)
    -   Woman squating (1) (https://www.youtube.com/watch?v=LSj280OEKUI)
    -   Woman squating (2) (https://www.youtube.com/watch?v=QifjltKUMCk)

    
This version maintains essential information in a more organized and readable format, focusing on how to get started, generate a custom workout, and highlighting limitations and future enhancements.
