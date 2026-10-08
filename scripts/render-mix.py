"""Render the website's continuous listening mix from the three verified local samples.
Requires ffmpeg in PATH. Keeps the real opening tag and returns into 5K at 12.3s.
"""
import pathlib
import shutil
import subprocess

root = pathlib.Path(__file__).resolve().parents[1]
media = root / 'public' / 'media'
ffmpeg = shutil.which('ffmpeg')
if not ffmpeg:
    raise SystemExit('Install ffmpeg or add it to PATH first.')
filters = [
    '[0:a]asplit=2[first][return]',
    '[first]atrim=start=0:end=48,asetpts=PTS-STARTPTS,aformat=sample_rates=48000:channel_layouts=stereo[a]',
    '[1:a]atrim=start=10.6:end=58.6,asetpts=PTS-STARTPTS,aformat=sample_rates=48000:channel_layouts=stereo[b]',
    '[2:a]atrim=start=10.6:end=58.6,asetpts=PTS-STARTPTS,aformat=sample_rates=48000:channel_layouts=stereo[c]',
    '[return]atrim=start=4.3:end=12.3,asetpts=PTS-STARTPTS,aformat=sample_rates=48000:channel_layouts=stereo[d]',
    '[a][b]acrossfade=d=2.4:c1=qsin:c2=qsin[ab]',
    '[ab][c]acrossfade=d=2.4:c1=qsin:c2=qsin[abc]',
    '[abc][d]acrossfade=d=2.4:c1=qsin:c2=qsin[raw]',
    '[raw]alimiter=limit=0.9:level=false[mix]',
]
subprocess.run([
    ffmpeg, '-hide_banner', '-loglevel', 'error', '-y',
    '-i', str(media/'5k.m4a'), '-i', str(media/'feel-real.m4a'),
    '-i', str(media/'letter-to-myself.m4a'),
    '-filter_complex', ';'.join(filters), '-map', '[mix]',
    '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart',
    str(media/'miiir-mix-v1.m4a'),
], check=True)
