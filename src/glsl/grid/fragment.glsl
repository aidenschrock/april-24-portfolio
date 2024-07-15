uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;

precision mediump float;

varying vec2 vUv;
varying float vElevation;

        void main()
        {
            float strength = step(0.95, mod(vUv.x * 100.0, 1.0));
            strength += step(0.95, mod(vUv.y * 100.0, 1.0));

           float mixStrength = ((vElevation*uColorMultiplier) + (uColorOffset*0.2) ) * (strength *1.5) ;
     
    vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);
    gl_FragColor = vec4(color, 0.2);
        }