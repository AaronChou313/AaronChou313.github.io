## Automatic Item Handling Robot

An autonomous robot capable of navigating simple terrain, avoiding obstacles, and performing item handling tasks based on known maps. The robot can autonomously navigate, grasp items, carry them, and sort them into designated recycling areas marked with QR codes.

### Hardware Components

- **Sensors**:
  - Mid-360 LiDAR for environment scanning
  - USB Camera for visual recognition
- **Manipulator**:
  - Stepper motor-driven robotic arm
  - Servo-driven gripper
- **Mobility**:
  - Mecanum wheel chassis for omnidirectional movement
- **Control Units**:
  - Jetson Orin NX computing module
  - STM32F407 control board

### Software Architecture

- **Mapping and Navigation**:
  - FAST-LIO for scanning and mapping
- **Object Detection**:
  - YOLOv5 for item detection
- **Vision Processing**:
  - OpenCV for coordinate calculation

### Key Features

1. **Autonomous Navigation**:
   - Map-based path planning
   - Obstacle avoidance capabilities
   - Terrain traversal (curbs and slopes)

2. **Item Handling**:
   - Visual recognition of items
   - Precise grasping mechanism
   - QR code-based sorting system

3. **Multi-modal Mobility**:
   - Omnidirectional movement
   - Obstacle negotiation capabilities

### Demonstration

<iframe width="560" height="315" src="https://www.youtube.com/embed/ERiQQB5y8SE" frameborder="0" allowfullscreen></iframe>

### Images

#### Chassis movement demonstration
<figure>
  <img src="assets/images/work/item-handling-robot/chassis-movement.gif" alt="Chassis Movement" />
</figure>

#### Robotic arm elevation
<figure>
  <img src="assets/images/work/item-handling-robot/arm-elevation.gif" alt="Arm Elevation" />
</figure>

#### Robotic arm extension
<figure>
  <img src="assets/images/work/item-handling-robot/arm-extension.gif" alt="Arm Extension" />
</figure>

#### Robot traversing speed bumps
<figure>
  <img src="assets/images/work/item-handling-robot/obstacle-negotiation.gif" alt="Obstacle Negotiation" />
</figure>

#### Robot traversing slopes
<figure>
  <img src="assets/images/work/item-handling-robot/uphill.gif" alt="Obstacle Negotiation" />
</figure>

#### Robot gripper opening and closing
<figure>
  <img src="assets/images/work/item-handling-robot/claw-operation.gif" alt="Obstacle Negotiation" />
</figure>

#### Robot storage box switch
<figure>
  <img src="assets/images/work/item-handling-robot/storage-box-rotate.gif" alt="Obstacle Negotiation" />
</figure>

### Source Code

- Repository links (to be added)

### Future Improvements

- Enhanced object recognition capabilities
- Improved terrain handling algorithms
- Extended battery life and efficiency
- More sophisticated sorting mechanisms

To implement this, you would need to:
1. Add your GIF images to your project directory
2. Update the image paths in the markdown
3. Add links to your source code repositories when available