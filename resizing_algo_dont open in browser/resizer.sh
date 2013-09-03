#!/bin/bash
for vf in `find ./`
do
	convert "$vf" -resize 88x55 output/"${vf%.*}"_mini.png
done
