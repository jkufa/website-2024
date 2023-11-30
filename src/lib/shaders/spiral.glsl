#include <common>

uniform vec3 iResolution;
uniform float iTime;
uniform float warp;
uniform float exponent;
uniform float sharpness;
uniform float scale;
uniform vec3 color1;
uniform vec3 color2;
// uniform vec3 color3;

float easeOutExp(float k) { // good
  return k == 1.0 ? 1.0 : 1.0 - pow( 2.0, - 10.0 * k );
}

float ease(float k) {
  return easeOutExp(k);
}

float spiral(vec2 m) {
  float r = length(m);
  float a = atan(m.y, -m.x);
  float rExp = pow(r, exponent);
  rExp = mix(rExp, ease(rExp), warp);
  float v = sin(scale * (rExp - (1.0 / scale) * a - iTime));

  float range = mix(rExp, 1.0, 1.0 - rExp) * 0.5; // awesome!
  range = mix(range, 0.0, sharpness);
  v = smoothstep(0.99 - range, 0.99 + range, v);
  return clamp(v, 0.0, 1.0);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = vec2(fragCoord.xy / iResolution.y);
    uv.x -= (iResolution.x - iResolution.y) / iResolution.y * 0.5;

    vec2 m = vec2(0.5, 0.5);

    float v = spiral(m-uv);

    vec3 col = mix(color1, color2, v);

    fragColor = vec4(col, 1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}