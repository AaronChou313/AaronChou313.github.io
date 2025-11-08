# Robot Arm with Tongyi Qianwen (Qwen) LLM Controller

A self-made desktop robotic arm integrated with Tongyi Qianwen (Qwen) large language model, featuring real-time digital twin visualization and multiple control interfaces.

## Hardware Components

### Mechanical Structure
- **Design Software**: SolidWorks modeling
- **Structure**: Custom-designed desktop robotic arm with 3 degrees of freedom

### Control System
- **Microcontroller**: STM32F103C8T6
- **Power Supply**: 5V 3A
- **Actuators**: MG996R servo motors for joint control

## Software Architecture

### Backend
- **Platform**: Node.js
- **Functions**: 
  - Communication with Tongyi Qianwen API
  - Serial communication with STM32 microcontroller
  - Real-time data processing and command translation

### Frontend
- **Framework**: Vue.js
- **Features**:
  - Graphical user interface for manual control
  - Real-time 3D digital twin visualization
  - Multiple control modes integration

## Key Features

1. **Multi-modal Control**:
   - Natural language control via Tongyi Qianwen LLM
   - Direct serial command input
   - Graphical manual adjustment through UI

2. **Real-time Digital Twin**:
   - 3D visualization of the robotic arm position
   - Synchronized rendering based on joint angles
   - Real-time feedback display

3. **Control Modes**:
   - LLM-based natural language commands
   - Serial instruction interface
   - GUI-based manual control

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kkg0zgn8mN4" frameborder="0" allowfullscreen></iframe>

## Source Code

- **STM32 Control Code**: [ApoArm_STM32 Repository](https://github.com/AaronChou313/ApoArm_STM32)
- **Web-based Control Interface**: [ApoArm_Web Repository](https://github.com/AaronChou313/ApoArm_Web)

## Future Improvements

- Enhanced precision control algorithms
- Extended functionality with additional sensors
- Improved 3D visualization capabilities

