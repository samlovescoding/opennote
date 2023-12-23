@props(['id', 'type' => 'text', 'placeholder' => ''])
<div class="form-group">
    <label class="form-label" for="{{ $id }}">{{ $slot }}</label>
    <div class="form-control-wrap">
        @if ($type == 'password')
            <a href="#" class="form-icon form-icon-right passcode-switch lg" data-target="{{ $id }}">
                <em class="passcode-icon icon-show icon ni ni-eye"></em>
                <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
            </a>
        @endif
        <input type="{{ $type }}" class="form-control form-control-lg @error($id) border-danger @enderror"
            id="{{ $id }}" name="{{ $id }}" placeholder="{{ $placeholder }}"
            value="@php if($type !== 'password') { echo old($id); } @endphp" />
        @error($id)
            <small class="text-danger">{{ $message }}</small>
        @enderror
    </div>
</div>
