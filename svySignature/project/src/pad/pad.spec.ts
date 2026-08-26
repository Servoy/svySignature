import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';
import { ServoyPublicTestingModule } from '@servoy/public';

import { Pad } from './pad';

describe('Pad', () => {
  let component: Pad;
  let fixture: ComponentFixture<Pad>;
  let originalGetContext: typeof HTMLCanvasElement.prototype.getContext;

  beforeEach(async () => {
    // jsdom has no canvas implementation, so getContext() returns null.
    originalGetContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      scale: vi.fn(),
      fillStyle: null,
      fillRect: vi.fn(),
      clearRect: vi.fn(),
      drawImage: vi.fn(),
    }) as any;

    await TestBed.configureTestingModule({
      imports: [Pad, ServoyPublicTestingModule],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Pad);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('servoyApi', {
      getMarkupId: vi.fn().mockReturnValue('test-pad'),
      trustAsHtml: vi.fn(),
      registerComponent: vi.fn(),
      unRegisterComponent: vi.fn(),
    });
    fixture.detectChanges();
    await fixture.whenStable();
  });

  afterEach(() => {
    HTMLCanvasElement.prototype.getContext = originalGetContext;
    vi.restoreAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a valid native element from getNativeElement()', () => {
    expect(component.getNativeElement()).not.toBeNull();
    expect(component.getNativeElement()).toBeInstanceOf(HTMLElement);
  });

  it('should resolve the canvas from its own view and initialize the signature pad', () => {
    const canvas = component.getNativeElement().querySelector('canvas');
    expect(canvas).toBeInstanceOf(HTMLCanvasElement);
    // clear() delegates to the SignaturePad instance, so this only works if it was created.
    expect(() => component.clear()).not.toThrow();
  });

  it('should apply servoyAttributes on the native element', async () => {
    fixture.componentRef.setInput('servoyAttributes', { 'data-testid': 'my-pad' });
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.getNativeElement().getAttribute('data-testid')).toBe('my-pad');
  });
});
