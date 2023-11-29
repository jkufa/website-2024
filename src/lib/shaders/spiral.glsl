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
  // float rExp = log(r); // this looks good, too, with scale 20.0
  rExp = mix(rExp, ease(rExp), warp);
  float v = sin(scale * (rExp - (1.0 / scale) * a - iTime));

  // controlling the sharpness of the edge:
  // float range = (1.0 - r) * 1.0;
  // float range = mix(0.0, 1.0, 1.0 - rExp);
  // float range = rExp * 0.5; // mix(0.0, 1.0, 1.0 - rExp);
  float range = mix(rExp, 1.0, 1.0 - rExp) * 0.5; // awesome!
  range = mix(range, 0.0, sharpness);
  v = smoothstep(0.5 - range, 0.5 + range, v);
  return clamp(v, 0.0, 1.0);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    // vec2 uv = fragCoord / iResolution.xy;

    vec2 uv = vec2(fragCoord.xy / iResolution.y);
    uv.x -= (iResolution.x - iResolution.y) / iResolution.y * 0.5;

    vec2 m = vec2(0.5, 0.5);

    float v = spiral(m-uv);

    // vec3 col = vec3(v);
    vec3 col = mix(color1, color2, v);

    // vec3 col = v < 0.333 ? mix(color1, color2, smoothstep(0.0, 0.333, v)) : mix(color2, color3, smoothstep(0.333, 1.0, v));
    // vec3 col = v < 0.0 ? mix(color1, color2, smoothstep(-1.0, 0.0, v)) : mix(color2, color3, smoothstep(0.0, 1.0, v));
    // vec3 col = v < 0.5 ? mix(color1, color2, smoothstep(0.0, 0.5, v)) : mix(color2, color3, smoothstep(0.5, 1.0, v));

    fragColor = vec4(col, 1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}