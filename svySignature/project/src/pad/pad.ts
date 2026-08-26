import { Component, SimpleChanges, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServoyBaseComponent } from '@servoy/public';
import SignaturePad from './lib/signature_pad';

@Component({
    selector: 'svysignature-pad',
    templateUrl: './pad.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule]
})
export class Pad extends ServoyBaseComponent<HTMLDivElement> {

    readonly styleClass = input<string>(undefined as any);
    readonly dotSize = input<number>(undefined as any);
    readonly minWidth = input<number>(undefined as any);
    readonly maxWidth = input<number>(undefined as any);
    readonly throttle = input<number>(undefined as any);
    readonly minDistance = input<number>(undefined as any);
    readonly backgroundColor = input<string>(undefined as any);
    readonly penColor = input<string>(undefined as any);
    readonly velocityFilterWeight = input<number>(undefined as any);

    readonly onBegin = input<(e: Event, data?: any) => void>(undefined as any);
    readonly onEnd = input<(e: Event, data?: any) => void>(undefined as any);

    private _signaturePad: any;
    private _element: any;
    private _canvas: any;
    private _options: any;

    private readonly _resizeCanvas = () => {
        if (!this._signaturePad || !this._canvas) return;
        const context = this._canvas.getContext('2d');
        if (!context) return;
        const data = this._signaturePad.toData();
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        this._canvas.width = this._canvas.offsetWidth * ratio;
        this._canvas.height = this._canvas.offsetHeight * ratio;
        context.scale(ratio, ratio);
        this._signaturePad.clear();
        this._signaturePad.fromData(data);
    };

    svyOnInit() {
        super.svyOnInit();
        window.addEventListener('resize', this._resizeCanvas);
        this.createSignaturePad();
    }

    svyOnChanges(changes: SimpleChanges) {
        super.svyOnChanges(changes);
        this.createSignaturePad();
    }

    override ngOnDestroy() {
        window.removeEventListener('resize', this._resizeCanvas);
        this._signaturePad?.off();
        super.ngOnDestroy();
    }

    private createSignaturePad() {
        // Resolve the wrapper and canvas from the component's own view rather than
        // document.getElementById: with OnPush the [id] bindings are not guaranteed
        // to be flushed to the DOM by the time svyOnInit runs.
        this._element = this.elementRef()?.nativeElement;
        this._canvas = this._element?.querySelector('canvas');
        if (!this._canvas) return;

        this._options = {
            dotSize: this.dotSize(),
            minWidth: this.minWidth(),
            maxWidth: this.maxWidth(),
            throttle: this.throttle(),
            minDistance: this.minDistance(),
            backgroundColor: this.backgroundColor(),
            penColor: this.penColor(),
            velocityFilterWeight: this.velocityFilterWeight()
        };

        this._signaturePad?.off();
        this._signaturePad = new SignaturePad(this._canvas, this._options);

        const onBegin = this.onBegin();
        if (onBegin) this._signaturePad.addEventListener('beginStroke', onBegin);

        const onEnd = this.onEnd();
        if (onEnd) this._signaturePad.addEventListener('endStroke', onEnd);

        this._resizeCanvas();
    }

    getDataUrl(type: string) {
        const datatemp = this._signaturePad.toData();
        setTimeout(() => {
            this._signaturePad.fromData(datatemp);
        }, 500);

        const data = this._signaturePad.toDataURL(type);
        return data;
    }

    setDataUrl(data: any) {
        return this._signaturePad.fromDataURL(data);
    }

    clear() {
        this._signaturePad.clear();
    }

}
