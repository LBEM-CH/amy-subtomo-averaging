#!/bin/bash  

### PARAMETERS ###

TOMONAME=Position_94_3
ROOT=/path/to/$TOMONAME
REPOSITORY=/path/to/subtomo-averaging
ANGPIX=1.98             # pixel size in Angs. Make sure it is a float, e.g. 2.00 (not 2)
MAGNIFICATION=64000     # nominal magnification
FRAMEEXPOSURE=3.4       # exposure per frame in e/A2
RECBINNING=4            # binning factor for reconstruction (choose something nice for picking particles)
BOXSIZE=64              # box size for inital subtomogram extraction (in pixels)
TOMOSIZEX=4096          # pixels
TOMOSIZEY=4096          # pixels
TOMOSIZEZ=3000          # pixels
MOTIONCOR_EXECUTABLE=/programs/x86_64-linux/system/sbgrid_bin/MotionCor2_1.6.4_Cuda112_Mar31cd w    2023

### END PARAMETERS ###

ANGPIX_BIN2=$(echo "$ANGPIX * 2" | bc)
ANGPIX_BIN4=$(echo "$ANGPIX * 4" | bc)
ANGPIX_BIN8=$(echo "$ANGPIX * 8" | bc)
ANGPIX_REC=$(echo "$ANGPIX * $RECBINNING" | bc)

echo "TOMONAME: $TOMONAME"
echo "ROOT: $ROOT"
echo "REPOSITORY: $REPOSITORY"
echo "ANGPIX: $ANGPIX"
echo "MAGNIFICATION: $MAGNIFICATION"
echo "FRAMEEXPOSURE: $FRAMEEXPOSURE"
echo "RECBINNING: $RECBINNING"
echo "BOXSIZE: $BOXSIZE"
echo "TOMOSIZEX: $TOMOSIZEX"
echo "TOMOSIZEY: $TOMOSIZEY"
echo "TOMOSIZEZ: $TOMOSIZEZ"
echo "MOTIONCOR_EXECUTABLE: $MOTIONCOR_EXECUTABLE"
echo "ANGPIX_BIN2: $ANGPIX_BIN2"
echo "ANGPIX_BIN4: $ANGPIX_BIN4"
echo "ANGPIX_BIN8: $ANGPIX_BIN8"
echo "ANGPIX_REC: $ANGPIX_REC"
