import { Component, Input, SimpleChanges, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ServoyBaseComponent } from '@servoy/public';
import SignaturePad from './lib/signature_pad';

@Component({
    selector: 'svysignature-pad',
    templateUrl: './pad.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pad extends ServoyBaseComponent < HTMLDivElement > {

    @Input() styleClass: string;
    @Input() dotSize: number;
    @Input() minWidth: number;
    @Input() maxWidth: number;
    @Input() throttle: number;
    @Input() minDistance: number;
    @Input() backgroundColor: string;
    @Input() penColor: string;
    @Input() velocityFilterWeight: number;

    @Input() onBegin: (e: Event, data ? : any) => void;
    @Input() onEnd: (e: Event, data ? : any) => void;

    @Input() signaturePad: any;
    @Input() element: any;
    @Input() canvas: any;
    @Input() options: any;

    constructor(protected readonly renderer: Renderer2, protected cdRef: ChangeDetectorRef) {
        super(renderer, cdRef);
    }

    svyOnInit() {
        super.svyOnInit();

        this.options = {
            dotSize: this.dotSize,
            minWidth: this.minWidth,
            maxWidth: this.maxWidth,
            throttle: this.throttle,
            minDistance: this.minDistance,
            backgroundColor: this.backgroundColor,
            penColor: this.penColor,
            velocityFilterWeight: this.velocityFilterWeight,
            onBegin : null,
            onEnd : null
        }

        this.element = document.getElementById(this.servoyApi.getMarkupId() + '-wrapper');
        this.canvas = document.getElementById(this.servoyApi.getMarkupId());

        //add onBegin/onEnd Handlers
        if (this.onBegin) {
            this.options.onBegin = this.onBegin
        }
        if (this.onEnd) {
            this.options.onEnd = this.onEnd
        }
        this.signaturePad = new SignaturePad(this.canvas, this.options);

        function resizeCanvas() {
            var data = this.signaturePad.toData()
            var ratio = Math.max(window.devicePixelRatio || 1, 1);
            this.canvas.width = this.canvas.offsetWidth * ratio;
            this.canvas.height = this.canvas.offsetHeight * ratio;
            this.canvas.getContext("2d").scale(ratio, ratio);
            this.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
            this.signaturePad.fromData(data);
        }

        window.addEventListener("resize", resizeCanvas.bind(this));
        resizeCanvas.call(this);        

    }

    svyOnChanges(changes: SimpleChanges) {
        super.svyOnChanges(changes);
        this.svyOnInit();
    }

    getDataUrl(type: String) {
        var datatemp = this.signaturePad.toData();
        setTimeout(function() {
            this.signaturePad.fromData(datatemp);
        }.bind(this), 500);

        var data = this.signaturePad.toDataURL(type);
        return data;
    }

    setDataUrl(data: any) {
        return this.signaturePad.fromDataURL(data);
    }

    clear() {
        this.signaturePad.clear();
    }

}