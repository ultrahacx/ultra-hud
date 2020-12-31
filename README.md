# IMPORTANT

This resource includes basic scripts needed to get fully functional install. In no way, the resources used with this hud are recommended for a live server. It is specially recommended to change the resources with an appropriate
systems.

NOTE: Resources provided with this script have additional code alongside the original code to make the hud fully functional at install. If you have these resources already then make sure to remove or disable them to prevent any conflict.

# Resource preview
[Video](https://drive.google.com/file/d/1Vk-cDY2Q3Sfc_JPDEs8cMaB4kbUakwTh/view)
<br>
[Screenshot 1](https://prnt.sc/wdltvu)
<br>
[Screenshot 2](https://prnt.sc/wdluyw)


# Requirements
- Brain
- ESX

# Download & Installation

### Using Git
```bash 	
cd resources
git clone https://github.com/ultrahacx/ultra-hud [hud]
```

### Manually 
- Download https://github.com/ultrahacx/ultra-hud/releases/download/release/ultra-hud-release.zip
- Put it in `resources` folder 

## Installation	

- Import `esx_status.sql` from `esx_status` folder in your database
- Import `esx_basicneeds.sql` from `esx_basicneeds` folder in your database
- Add this in your `server.cfg` in the following order:
```bash
start esx_status
start esx_basicneeds
start esx_stress
start ultra-hud
```


# Credits

I do not own `esx_status`, `esx_basicneeds`, `esx_stress` and all the credit goes to the respective developers.
## Resources used:
- `esx_stress` is an edited version of [Stress-System-by-utku](https://github.com/utkuali/Stress-System-by-utku)
- [esx_status](https://github.com/esx-framework/esx_status)
- [esx_basicneeds](https://github.com/esx-framework/esx_basicneeds) 
