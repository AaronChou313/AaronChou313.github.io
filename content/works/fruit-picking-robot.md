# Autonomous Fruit Harvesting Robot

In the pursuit of advancing agricultural automation, I developed an autonomous fruit harvesting robot capable of navigating predefined maps and selectively harvesting ripe fruits while leaving unripe ones untouched. This innovative system represents a significant step toward sustainable and efficient farming practices.

## Hardware Components

The robot is equipped with a comprehensive sensor suite that enables it to perceive and interact with its environment effectively:

- **Mid-360 LiDAR System**: Provides 360-degree environmental scanning for simultaneous localization and mapping
- **High-resolution USB Camera**: Serves as the primary vision sensor for fruit detection and localization
- **Laser Ranging Module**: Ensures precise distance measurements during the harvesting process for accurate positioning relative to target fruits

The mechanical design features a mecanum wheel chassis that provides omnidirectional mobility, allowing the robot to maneuver flexibly in orchard environments. A precision-engineered manipulator system, driven by stepper motors, handles the translational movements required for reaching fruits at various positions. The harvesting end-effector consists of a servo-driven gripper specifically designed to handle delicate fruits without causing damage during the picking process. 

The entire system is orchestrated by a dual-controller architecture featuring:
- **Jetson Orin NX Computing Module**: Handles high-level processing tasks
- **STM32F407 Microcontroller**: Manages real-time motion control

## Software Architecture

The software architecture integrates state-of-the-art algorithms to enable autonomous operation:

- **POINT-LIO**: Foundation for robust LiDAR-based simultaneous localization and mapping, providing the spatial awareness necessary for navigation
- **YOLOv8**: Implemented and trained for fruit detection and classification to distinguish between ripe (red) and unripe (green) fruits with high accuracy
- **OpenCV-based Computer Vision**: Processes camera data to calculate precise 3D coordinates of target fruits
- **Laser Ranging Integration**: Provides fine-tuned distance adjustments to ensure optimal harvesting positioning

## Operational Workflow

The robot's operational workflow follows a systematic process:

1. **Map-based Navigation**: The robot navigates to the target orchard area using predefined maps
2. **Fruit Scanning**: Once in position, the vision system scans for fruits, identifying only those that have reached maturity
3. **Path Planning**: The robot calculates the optimal approach path, utilizing its omnidirectional mobility to position itself for harvesting
4. **Precision Harvesting**: The manipulator system extends toward the target fruit, with the laser ranging module providing real-time distance feedback to ensure precise positioning
5. **Fruit Collection**: The gripper mechanism carefully grasps the fruit, detaches it from the plant, and retracts to transport it to a designated collection area
6. **Unloading**: Harvested fruits are gently deposited in the collection area

## Demonstration

<iframe width="560" height="315" src="https://www.youtube.com/embed/GXOcZxyLjVI" frameborder="0" allowfullscreen></iframe>

#### Robot navigating through orchard environment
<figure>
  <img src="assets/images/work/fruit-picking-robot/movement.gif" alt="Movement" />
</figure>

#### Precision harvesting of target fruits
<figure>
  <img src="assets/images/work/fruit-picking-robot/picking.gif" alt="Picking" />
</figure>

#### Store the picked fruits in storage baskets for transportation
<figure>
  <img src="assets/images/work/fruit-picking-robot/transportation.gif" alt="Transportation" />
</figure>

#### Transportation and unloading of harvested fruits
<figure>
  <img src="assets/images/work/fruit-picking-robot/unload.gif" alt="Unload" />
</figure>

This autonomous harvesting system demonstrates the potential for robotics to address labor shortages in agriculture while maintaining the careful handling required for delicate produce. The selective harvesting capability ensures only ripe fruits are collected, potentially improving overall crop quality and reducing waste. Future developments will focus on expanding the system's capabilities to handle a wider variety of crops and environmental conditions, as well as improving the efficiency and speed of the harvesting process.

The integration of advanced perception, navigation, and manipulation technologies in this robot showcases how modern robotics can be applied to traditional agricultural challenges, offering a glimpse into the future of smart farming where autonomous systems work alongside human operators to increase productivity and sustainability.